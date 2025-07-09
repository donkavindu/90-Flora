const Services = ({id}) => {
  return (
    <div id={id} className="relative w-full py-20 servicetexture">
      
      <div className="w-[75%] h-full  mx-auto">
        <div className="text-center text-[#0D281A]">
          <h4 className="text-[24px]">
            Crafted with <span className="font-bold">Care</span>. Designed with{" "}
            <span className="font-bold">Detail</span>. Delivered with{" "}
            <span className="font-bold">Love</span>.
          </h4>
          <p className="text-[16px]">
            From the first meeting to the final petal, 90Flora ensures your
            floral dream becomes a flawless reality. Here’s how we do it
          </p>
        </div>
        <div>
          {/* service 01 */}
          <div className="flex items-center gap-5 mt-10">
            <div className="newYork text-[84px] text-[#909C96] flex-[1]">
              01
            </div>
            <div className="text-[#0D281A] flex-[7]">
              <h2 className="text-[24px]">Consultation & Concept</h2>
              <div className="text-[16px]">
                We begin with understanding your theme, colors, culture, and
                venue. Your vision becomes our inspiration.
              </div>
            </div>
          </div>
          {/* service 02 */}
          <div className="flex items-center gap-5 -mt-2">
            <div className="newYork text-[84px] text-[#909C96] flex-[1]">
              02
            </div>
            <div className="text-[#0D281A] flex-[7]">
              <h2 className="text-[24px]">Mood-boarding & Styling</h2>
              <div className="text-[16px]">
                Our designers create moodboards and floral palettes tailored to
                your story, tone, and style.
              </div>
            </div>
          </div>
          {/* service 03 */}
          <div className="flex items-center gap-5 -mt-2">
            <div className="newYork text-[84px] text-[#909C96] flex-[1]">
              03
            </div>
            <div className="text-[#0D281A] flex-[7]">
              <h2 className="text-[24px]">Custom Floral Planning</h2>
              <div className="text-[16px]">
                From settee backs to aisle petals, every floral component is
                thoughtfully mapped and priced transparently.
              </div>
            </div>
          </div>
          {/* service 04 */}
          <div className="flex items-center gap-5 -mt-2">
            <div className="newYork text-[84px] text-[#909C96] flex-[1]">
              04
            </div>
            <div className="text-[#0D281A] flex-[7]">
              <h2 className="text-[24px]">Flower Sourcing</h2>
              <div className="text-[16px]">
                We handpick blooms from trusted local & global growers to ensure
                premium freshness and sustainability.
              </div>
            </div>
          </div>
          {/* service 05 */}
          <div className="flex items-center gap-5 -mt-2">
            <div className="newYork text-[84px] text-[#909C96] flex-[1]">
              05
            </div>
            <div className="text-[#0D281A] flex-[7]">
              <h2 className="text-[24px]">Assembly & Installation</h2>
              <div className="text-[16px]">
                Our expert team brings the vision to life on-site—on time, with
                utmost care and precision.
              </div>
            </div>
          </div>
          {/* service 06 */}
          <div className="flex items-center gap-5 -mt-2">
            <div className="newYork text-[84px] text-[#909C96] flex-[1]">
              06
            </div>
            <div className="text-[#0D281A] flex-[7]">
              <h2 className="text-[24px]">On-Day Floral Management</h2>
              <div className="text-[16px]">
                We stay with you to manage floral changes, bouquet touch-ups,
                and maintain freshness throughout the event.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
