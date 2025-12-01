import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { SKILL_NODES, SKILL_LINKS } from '../constants';

const SkillsGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const { width, height } = dimensions;

    // Simulation Setup
    const nodes = SKILL_NODES.map(d => ({ ...d }));
    const links = SKILL_LINKS.map(d => ({ ...d }));

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(60))
      .force("charge", d3.forceManyBody().strength(-120))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius((d: any) => d.radius + 4).iterations(1)) // Reduced iterations
      .force("x", d3.forceX(width / 2).strength(0.08)) // Increased strength for faster settling
      .force("y", d3.forceY(height / 2).strength(0.08))
      .alphaDecay(0.02) // Stabilize faster
      .velocityDecay(0.4);

    // Groups
    const linkGroup = svg.append("g").attr("class", "links");
    const nodeGroup = svg.append("g").attr("class", "nodes");
    const labelGroup = svg.append("g").attr("class", "labels");

    // Colors: Expanded Palette for Groups 1-5 (Blue/Purple Theme)
    const colorScale = d3.scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4, 5])
      .range([
        "#ffffff", // Group 1: Languages (White)
        "#3B82F6", // Group 2: Core Data Science (Electric Blue)
        "#8B5CF6", // Group 3: Tools/Frameworks (Purple)
        "#60A5FA", // Group 4: Robotics/Engineering (Lighter Blue)
        "#A78BFA"  // Group 5: Soft Skills (Lighter Purple)
      ]);

    // Links: Very subtle lines
    const link = linkGroup.selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#3B82F6")
      .attr("stroke-opacity", 0.15)
      .attr("stroke-width", 0.5);

    // Nodes: Minimal dots
    const node = nodeGroup.selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d: any) => d.radius / 3 + 1)
      .attr("fill", "#030305")
      .attr("stroke", (d: any) => colorScale(d.group))
      .attr("stroke-width", 1.5)
      .call(drag(simulation) as any)
      .on("mouseover", function (event, d: any) {
        d3.select(this)
          .attr("fill", colorScale(d.group))
          .attr("fill-opacity", 0.8)
          .attr("r", d.radius / 3 + 3);
        simulation.alphaTarget(0.1).restart(); // Wake up on interaction
      })
      .on("mouseout", function (event, d: any) {
        d3.select(this)
          .attr("fill", "#030305")
          .attr("fill-opacity", 1)
          .attr("r", d.radius / 3 + 1);
        simulation.alphaTarget(0);
      });

    // Labels: Sans-serif, clearly visible
    const label = labelGroup.selectAll("text")
      .data(nodes)
      .join("text")
      .text((d: any) => d.id)
      .attr("font-size", (d: any) => d.group === 1 ? "11px" : "9px") // Languages slightly larger
      .attr("fill", (d: any) => colorScale(d.group))
      .attr("text-anchor", "middle")
      .attr("dy", (d: any) => -d.radius / 3 - 6) // Position above node
      .attr("pointer-events", "none")
      .attr("font-family", "Inter, sans-serif")
      .attr("font-weight", (d: any) => d.group === 1 || d.group === 2 ? "600" : "400")
      .attr("opacity", 0.9);

    // Simulation Tick
    simulation.on("tick", () => {
      // Bounding box constraint
      node
        .attr("cx", (d: any) => {
          return d.x = Math.max(20, Math.min(width - 20, d.x));
        })
        .attr("cy", (d: any) => {
          return d.y = Math.max(20, Math.min(height - 20, d.y));
        });

      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      label
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);
    });

    // Drag behavior
    function drag(sim: d3.Simulation<d3.SimulationNodeDatum, undefined>) {
      function dragstarted(event: any, d: any) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: any) {
        if (!event.active) sim.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    // Visibility Control: Pause simulation when not in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          simulation.stop();
        } else {
          simulation.restart();
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      simulation.stop();
      observer.disconnect();
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full flex justify-center items-center overflow-hidden relative cursor-crosshair">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
    </div>
  );
};

export default SkillsGraph;