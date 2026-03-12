import { useState } from "react";
import { Printer } from "lucide-react";

const BusinessModelCanvas = () => {
  const [fields, setFields] = useState({
    partners: "",
    activities: "",
    resources: "",
    propositions: "",
    relationships: "",
    channels: "",
    segments: "",
    cost: "",
    revenue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="canvas" className="bg-card text-charcoal rounded-2xl shadow-xl overflow-hidden mt-12 print:mt-0 print:shadow-none print:bg-white print:text-black">
      <div className="bg-teal p-6 flex flex-col sm:flex-row items-center justify-between print:hidden">
        <div>
          <h2 className="font-headline text-3xl font-bold uppercase text-primary-foreground leading-tight">
            Interactive Business Model Canvas
          </h2>
          <p className="mt-2 text-primary-foreground/80 font-body text-sm">
            Fill out the building blocks below, then click Print to save your canvas as a PDF.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="mt-4 sm:mt-0 bg-primary-foreground text-teal font-barlow font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <Printer size={18} /> Print / Save as PDF
        </button>
      </div>

      <div className="p-6 overflow-x-auto print:p-0">
        <style>
          {`
            @media print {
              body * {
                visibility: hidden;
              }
              #canvas, #canvas * {
                visibility: visible;
              }
              #canvas {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }
              .print\\:hidden {
                display: none !important;
              }
            }
          `}
        </style>
        <div className="min-w-[800px] h-[500px] grid grid-cols-10 grid-rows-3 gap-2 border-2 border-border p-2 bg-off-white print:bg-white print:border-black print:h-[100vh]">
          {/* Top Row */}
          <div className="col-span-2 row-span-2 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Key Partners</label>
            <textarea
              name="partners"
              value={fields.partners}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="Who are our Key Partners? Who are our key suppliers?"
            />
          </div>
          <div className="col-span-2 row-span-1 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Key Activities</label>
            <textarea
              name="activities"
              value={fields.activities}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="What Key Activities do our Value Propositions require?"
            />
          </div>
          <div className="col-span-2 row-span-2 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Value Propositions</label>
            <textarea
              name="propositions"
              value={fields.propositions}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="What value do we deliver to the customer? Which one of our customer's problems are we helping to solve?"
            />
          </div>
          <div className="col-span-2 row-span-1 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Customer Relationships</label>
            <textarea
              name="relationships"
              value={fields.relationships}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="What type of relationship does each of our Customer Segments expect us to establish and maintain with them?"
            />
          </div>
          <div className="col-span-2 row-span-2 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Customer Segments</label>
            <textarea
              name="segments"
              value={fields.segments}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="For whom are we creating value? Who are our most important customers?"
            />
          </div>
          {/* Middle Row (remaining parts) */}
          <div className="col-span-2 row-span-1 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Key Resources</label>
            <textarea
              name="resources"
              value={fields.resources}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="What Key Resources do our Value Propositions require?"
            />
          </div>
          <div className="col-span-2 row-span-1 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Channels</label>
            <textarea
              name="channels"
              value={fields.channels}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="Through which Channels do our Customer Segments want to be reached?"
            />
          </div>
          {/* Bottom Row */}
          <div className="col-span-5 row-span-1 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Cost Structure</label>
            <textarea
              name="cost"
              value={fields.cost}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="What are the most important costs inherent in our business model?"
            />
          </div>
          <div className="col-span-5 row-span-1 border border-border bg-white print:border-black flex flex-col p-2">
            <label className="font-barlow font-bold text-xs uppercase text-teal mb-1">Revenue Streams</label>
            <textarea
              name="revenue"
              value={fields.revenue}
              onChange={handleChange}
              className="w-full h-full resize-none outline-none font-body text-sm bg-transparent"
              placeholder="For what value are our customers really willing to pay? How are they currently paying?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelCanvas;
