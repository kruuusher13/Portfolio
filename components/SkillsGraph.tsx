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
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(60)) // Shorter distance for denser mesh
      .force("charge", d3.forceManyBody().strength(-120)) // Adjusted repulsion
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius((d: any) => d.radius + 4).iterations(2))
      .force("x", d3.forceX(width / 2).strength(0.06))
      .force("y", d3.forceY(height / 2).strength(0.06));

    // Groups
    const linkGroup = svg.append("g").attr("class", "links");
    const nodeGroup = svg.append("g").attr("class", "nodes");
    const labelGroup = svg.append("g").attr("class", "labels");

    // Colors: Expanded Palette for Groups 1-5
    const colorScale = d3.scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4, 5])
      .range([
        "#ffffff", // Group 1: Languages (White/High Contrast)
        "#4ade80", // Group 2: Core Data Science (Bright Terminal Green)
        "#22c55e", // Group 3: Tools/Frameworks (Standard Green)
        "#facc15", // Group 4: Robotics/Engineering (Terminal Yellow/Amber for Highlight)
        "#a7f3d0"  // Group 5: Soft Skills (Pale Green)
      ]);

    // Links: Very subtle lines
    const link = linkGroup.selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#15803d") 
      .attr("stroke-opacity", 0.3)
      .attr("stroke-width", 0.5);

    // Nodes: Minimal dots
    const node = nodeGroup.selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d: any) => d.radius / 3 + 1)
      .attr("fill", "#050a05") 
      .attr("stroke", (d: any) => colorScale(d.group))
      .attr("stroke-width", 1.5)
      .call(drag(simulation) as any)
      .on("mouseover", function(event, d: any) { 
        d3.select(this)
          .attr("fill", colorScale(d.group))
          .attr("fill-opacity", 0.8)
          .attr("r", d.radius / 3 + 3);
      })
      .on("mouseout", function(event, d: any) { 
        d3.select(this)
          .attr("fill", "#050a05")
          .attr("fill-opacity", 1)
          .attr("r", d.radius / 3 + 1);
      });

    // Labels: Monospace, clearly visible
    const label = labelGroup.selectAll("text")
      .data(nodes)
      .join("text")
      .text((d: any) => d.id)
      .attr("font-size", (d: any) => d.group === 1 ? "11px" : "9px") // Languages slightly larger
      .attr("fill", (d: any) => colorScale(d.group))
      .attr("text-anchor", "middle")
      .attr("dy", (d: any) => -d.radius / 3 - 6) // Position above node
      .attr("pointer-events", "none")
      .attr("font-family", "Fira Code, monospace")
      .attr("font-weight", (d: any) => d.group === 1 || d.group === 2 ? "600" : "300")
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

    return () => {
      simulation.stop();
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