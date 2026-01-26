import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Chart - Dressen",
  description: "Clothing size chart for Bangladesh market",
};

export default function SizeChartPage() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8 text-center">
        Size Chart
      </h1>

      {/* Clothing Size Chart */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Clothing Size Chart</h2>
        <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">All measurements are in inches. Sizes apply to T-Shirts, Shirts, Pants, and other clothing items.</p>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {/* Men */}
          <div className="border border-neutral rounded-lg overflow-hidden">
            <div className="bg-primary text-accent px-3 py-2 font-bold">Men</div>
            <div className="divide-y divide-neutral">
              {[{s:'S',c:'36-38&quot;',l:'27-29&quot;',sh:'16-17&quot;'},{s:'M',c:'38-40&quot;',l:'28-30&quot;',sh:'17-18&quot;'},{s:'L',c:'40-42&quot;',l:'29-31&quot;',sh:'18-19&quot;'},{s:'XL',c:'42-44&quot;',l:'30-32&quot;',sh:'19-20&quot;'},{s:'XXL',c:'44-46&quot;',l:'31-33&quot;',sh:'20-21&quot;'}].map((item,i)=>(
                <div key={i} className="p-3 text-xs">
                  <div className="font-semibold mb-2">Size: {item.s}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div><span className="text-muted-foreground">Chest:</span> {item.c}</div>
                    <div><span className="text-muted-foreground">Length:</span> {item.l}</div>
                    <div><span className="text-muted-foreground">Shoulder:</span> {item.sh}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Women */}
          <div className="border border-neutral rounded-lg overflow-hidden">
            <div className="bg-primary text-accent px-3 py-2 font-bold">Women</div>
            <div className="divide-y divide-neutral">
              {[{s:'S',c:'32-34&quot;',l:'25-38&quot;',sh:'14&quot;'},{s:'M',c:'34-36&quot;',l:'26-40&quot;',sh:'15&quot;'},{s:'L',c:'36-38&quot;',l:'27-42&quot;',sh:'16&quot;'},{s:'XL',c:'38-40&quot;',l:'28-44&quot;',sh:'17&quot;'},{s:'XXL',c:'40-42&quot;',l:'29-46&quot;',sh:'18&quot;'}].map((item,i)=>(
                <div key={i} className="p-3 text-xs">
                  <div className="font-semibold mb-2">Size: {item.s}</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div><span className="text-muted-foreground">Bust:</span> {item.c}</div>
                    <div><span className="text-muted-foreground">Length:</span> {item.l}</div>
                    <div><span className="text-muted-foreground">Shoulder:</span> {item.sh}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Kids */}
          <div className="border border-neutral rounded-lg overflow-hidden">
            <div className="bg-primary text-accent px-3 py-2 font-bold">Kids</div>
            <div className="divide-y divide-neutral">
              {[{s:'2-3Y',c:'22-24&quot;',l:'16&quot;'},{s:'4-5Y',c:'24-26&quot;',l:'18&quot;'},{s:'6-7Y',c:'26-28&quot;',l:'20&quot;'},{s:'8-9Y',c:'28-30&quot;',l:'22&quot;'},{s:'10-12Y',c:'30-32&quot;',l:'24&quot;'}].map((item,i)=>(
                <div key={i} className="p-3 text-xs">
                  <div className="font-semibold mb-2">Age: {item.s}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="text-muted-foreground">Chest:</span> {item.c}</div>
                    <div><span className="text-muted-foreground">Length:</span> {item.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse border border-neutral text-sm">
            <thead className="bg-primary text-accent">
              <tr>
                <th className="border border-neutral px-3 py-2 text-left">Category</th>
                <th className="border border-neutral px-3 py-2 text-left">Size</th>
                <th className="border border-neutral px-3 py-2 text-left">Chest/Bust</th>
                <th className="border border-neutral px-3 py-2 text-left">Length</th>
                <th className="border border-neutral px-3 py-2 text-left">Shoulder</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-bold" rowSpan={5}>Men</td>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">S</td>
                <td className="border border-neutral px-2 md:px-3 py-2">36-38&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">27-29&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">16-17&quot;</td>
              </tr>
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">M</td>
                <td className="border border-neutral px-2 md:px-3 py-2">38-40&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">28-30&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">17-18&quot;</td>
              </tr>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">L</td>
                <td className="border border-neutral px-2 md:px-3 py-2">40-42&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">29-31&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">18-19&quot;</td>
              </tr>
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">XL</td>
                <td className="border border-neutral px-2 md:px-3 py-2">42-44&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">30-32&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">19-20&quot;</td>
              </tr>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">XXL</td>
                <td className="border border-neutral px-2 md:px-3 py-2">44-46&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">31-33&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">20-21&quot;</td>
              </tr>
              
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-bold" rowSpan={5}>Women</td>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">S</td>
                <td className="border border-neutral px-2 md:px-3 py-2">32-34&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">25-38&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">14&quot;</td>
              </tr>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">M</td>
                <td className="border border-neutral px-2 md:px-3 py-2">34-36&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">26-40&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">15&quot;</td>
              </tr>
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">L</td>
                <td className="border border-neutral px-2 md:px-3 py-2">36-38&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">27-42&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">16&quot;</td>
              </tr>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">XL</td>
                <td className="border border-neutral px-2 md:px-3 py-2">38-40&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">28-44&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">17&quot;</td>
              </tr>
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">XXL</td>
                <td className="border border-neutral px-2 md:px-3 py-2">40-42&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">29-46&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">18&quot;</td>
              </tr>
              
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-bold" rowSpan={5}>Kids</td>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">2-3Y</td>
                <td className="border border-neutral px-2 md:px-3 py-2">22-24&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">16&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">-</td>
              </tr>
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">4-5Y</td>
                <td className="border border-neutral px-2 md:px-3 py-2">24-26&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">18&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">-</td>
              </tr>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">6-7Y</td>
                <td className="border border-neutral px-2 md:px-3 py-2">26-28&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">20&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">-</td>
              </tr>
              <tr>
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">8-9Y</td>
                <td className="border border-neutral px-2 md:px-3 py-2">28-30&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">22&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">-</td>
              </tr>
              <tr className="bg-section">
                <td className="border border-neutral px-2 md:px-3 py-2 font-semibold">10-12Y</td>
                <td className="border border-neutral px-2 md:px-3 py-2">30-32&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">24&quot;</td>
                <td className="border border-neutral px-2 md:px-3 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Measurement Guide */}
      <div className="bg-section p-6 rounded-lg">
        <h2 className="text-xl font-bold text-primary mb-4">How to Measure</h2>
        <ul className="space-y-2 text-primary">
          <li><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontal.</li>
          <li><strong>Length:</strong> Measure from the highest point of the shoulder to the bottom hem.</li>
          <li><strong>Shoulder:</strong> Measure from one shoulder point to the other across the back.</li>
          <li><strong>Waist:</strong> Measure around your natural waistline.</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Note: All measurements are in inches. For the best fit, please measure yourself and compare with our size chart.
        </p>
      </div>
    </div>
  );
}
