import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navigation />

      <Hero />

      {/* Three Ways to Deploy Voice AI */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#D02327] text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Three Ways to Deploy Voice AI
            </h2>
            <p className="text-[#231F1F] text-lg md:text-xl lg:text-2xl font-black max-w-[640px] mx-auto">
              Choose the right solution for your business needs or combine them for a complete customer communication ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* AI Receptionist */}
            <div className="relative bg-[#615656] rounded-md overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8675b6b483c9bde2304ebf96be601feb1db8d1f?width=866" 
                alt="AI Receptionist" 
                className="w-full h-[400px] md:h-[590px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-black">AI Receptionist</h3>
              </div>
            </div>

            {/* AI Call Center */}
            <div className="bg-[#D9D9D9] rounded-md p-6 flex items-start min-h-[400px] md:min-h-[590px]">
              <h3 className="text-[#D02327] text-2xl md:text-3xl lg:text-4xl font-black">
                AI agent-based Call Center
              </h3>
            </div>

            {/* AI Sales Agent */}
            <div className="bg-[#D9D9D9] rounded-md p-6 flex items-start min-h-[400px] md:min-h-[590px]">
              <h3 className="text-[#D02327] text-2xl md:text-3xl lg:text-4xl font-black">
                AI Sales Agent
              </h3>
            </div>
          </div>

          {/* Descriptions */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div className="bg-[#615656] rounded-md p-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-black mb-4">
                "Your most reliable receptionist works 24/7 and never misses a call."
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl font-medium">
                Never miss another call or opportunity. Our AI Receptionist answers every call instantly, routes callers to the right department, schedules appointments, and captures every detail without ever getting overwhelmed.
              </p>
            </div>

            <div className="bg-[#615656] rounded-md p-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-black mb-4">
                "Cut your support queue in half — without cutting corners."
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl font-medium">
                Let AI handle your high-volume inquiries while your human agents focus on complex issues. Our AI Call Center Agents handle FAQs, process information requests, and qualify leads with human-like conversation skills.
              </p>
            </div>

            <div className="bg-[#615656] rounded-md p-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-black mb-4">
                "Reach 100 leads before your team finishes coffee."
              </p>
              <p className="text-white text-base md:text-lg lg:text-xl font-medium">
                Scale your outreach without scaling your team. Our AI Sales Agents conduct initial outreach calls, qualify prospects, and book meetings with interested leads—all while your human closers focus on high-value conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner 1 */}
      <CTA />

      {/* Key Benefits */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[var(--sac-500)] mb-6">
              Key Benefits of Our Voice AI
            </h2>
            <h3 className="max-w-[640px] mx-auto">
              Experience a level of consistency, scalability, and cost efficiency that traditional call centers simply cannot match.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
              <div className="flex flex-col w-[257px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-SAC-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Zero wait time
                </h3>
                <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-variable-collection-SAC-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
                  Every call answered instantly without hold times. No more abandoned
                  calls or frustrated customers.
                </p>
              </div>
              <div className="relative w-24 h-24" aria-hidden="true">
                Bild!
              </div> 
            </article>

                        <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
              <div className="flex flex-col w-[257px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-SAC-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Zero wait time
                </h3>
                <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-variable-collection-SAC-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
                  Every call answered instantly without hold times. No more abandoned
                  calls or frustrated customers.
                </p>
              </div>
              <div className="relative w-24 h-24" aria-hidden="true">
                Bild
              </div> 
            </article>

                        <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
              <div className="flex flex-col w-[257px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-SAC-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Zero wait time
                </h3>
                <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-variable-collection-SAC-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
                  Every call answered instantly without hold times. No more abandoned
                  calls or frustrated customers.
                </p>
              </div>
              <div className="relative w-24 h-24" aria-hidden="true">
                Bild
              </div> 
            </article>

                        <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
              <div className="flex flex-col w-[257px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-SAC-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Zero wait time
                </h3>
                <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-variable-collection-SAC-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
                  Every call answered instantly without hold times. No more abandoned
                  calls or frustrated customers.
                </p>
              </div>
              <div className="relative w-24 h-24" aria-hidden="true">
                Bild
              </div> 
            </article>

                        <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
              <div className="flex flex-col w-[257px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-SAC-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Zero wait time
                </h3>
                <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-variable-collection-SAC-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
                  Every call answered instantly without hold times. No more abandoned
                  calls or frustrated customers.
                </p>
              </div>
              <div className="relative w-24 h-24" aria-hidden="true">
                Bild
              </div> 
            </article>

                        <article className="flex items-center gap-4 p-6 relative bg-[var(--sac-grey-500)] rounded-lg benefits">
              <div className="flex flex-col w-[257px] items-start gap-4 relative">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-variable-collection-SAC-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  Zero wait time
                </h3>
                <p className="relative self-stretch font-body-default font-[number:var(--body-default-font-weight)] text-variable-collection-SAC-white text-[length:var(--body-default-font-size)] tracking-[var(--body-default-letter-spacing)] leading-[var(--body-default-line-height)] [font-style:var(--body-default-font-style)]">
                  Every call answered instantly without hold times. No more abandoned
                  calls or frustrated customers.
                </p>
              </div>
              <div className="relative w-24 h-24" aria-hidden="true">
                Bild
              </div> 
            </article>

          </div>
        </div>
      </section>

      {/* AI Agents vs Human Call Centers */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#D02327] text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              AI Agents vs. Human Call Centers
            </h2>
            <p className="text-[#231F1F] text-lg md:text-xl lg:text-2xl font-black max-w-[700px] mx-auto">
              The unfair advantages that make AI voice agents the clear choice for forward-thinking businesses.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#231F20]">
                  <th className="text-white text-xl md:text-2xl lg:text-4xl font-black p-4 text-left">Feature</th>
                  <th className="text-white text-xl md:text-2xl lg:text-4xl font-black p-4 text-center">AI Agents</th>
                  <th className="text-white text-xl md:text-2xl lg:text-4xl font-black p-4 text-center">Human Agents</th>
                </tr>
              </thead>
              <tbody className="divide-y-[3px] divide-[#231F20]">
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">⏱</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">24/7 Availability</span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D02327] rounded-full text-white text-2xl">✓</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D02327] rounded-full text-white text-2xl">✗</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">😎</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Sick Days & Vacations</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Never</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Yes (10-20 days/year)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">🌐</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Language Support</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">100+ languages</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">1-2 languages</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">📈</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Scaling Capacity</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Instant</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Days to weeks</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">⏱</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Training Time</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Minutes</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">2-4 weeks</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">💯</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Consistent Quality</span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D02327] rounded-full text-white text-2xl">✓</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D02327] rounded-full text-white text-2xl">✗</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">🏠</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Infrastructure Costs</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">$1,000-$5,000/seat</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">🏥</span>
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">Benefits & Insurance</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">None</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-[#231F20] text-lg md:text-xl font-medium">$15,000-$25,000/year</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-[#231F20]">
                  <td className="text-white text-xl md:text-2xl lg:text-4xl font-black p-4">Monthly Price</td>
                  <td className="text-white text-xl md:text-2xl lg:text-4xl font-black p-4 text-center">5000$~</td>
                  <td className="text-white text-xl md:text-2xl lg:text-4xl font-black p-4 text-center">I don't know</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Banner 2 */}
      <CTA />

      {/* About Us */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#D02327] text-3xl md:text-4xl lg:text-5xl font-black mb-6">About Us</h2>
            <p className="text-[#231F1F] text-lg md:text-xl lg:text-2xl font-black max-w-[700px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-[#D02327] text-2xl md:text-3xl lg:text-4xl font-black mb-4">Our Origins</h3>
              <p className="text-[#231F20] text-lg md:text-xl lg:text-2xl font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-[#D9D9D9] rounded-md h-72 md:h-96"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#615656] py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-6">Contact Us Here</h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="text-white text-2xl md:text-3xl lg:text-4xl font-black space-y-4">
                <p>Give us a call:</p>
                <p>+41 411 441 41 41</p>
                <p>or</p>
                <p>Write us a mail:</p>
                <p>Swiss@AI.deep</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                <div className="text-6xl md:text-8xl">🤖</div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                  Our specialist, at your service!
                </p>
                <svg className="w-48 md:w-96 h-12 md:h-20 mx-auto md:ml-auto" viewBox="0 0 386 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.52413 35.0689V27.3965H42.6771V20.9184H9.65692C7.84957 20.9184 6.09646 20.1946 4.81325 18.9099C3.53004 17.6251 2.80713 15.8699 2.80713 14.0603V7.23844C2.80713 3.45653 5.86159 0.398438 9.63893 0.398438H48.6594V8.07082H11.3739V13.2461H44.3579C46.1833 13.2461 47.9184 13.9699 49.2016 15.2546C50.4848 16.5394 51.2078 18.2765 51.2078 20.1042V28.2289C51.2078 30.0384 50.4848 31.7937 49.2016 33.0784C47.9184 34.3632 46.1833 35.087 44.3579 35.087H4.50603L4.52413 35.0689Z" fill="white"/>
                  <circle cx="27" cy="70" r="6" fill="white"/>
                  <path d="M0 54C0 51.2386 2.23858 49 5 49H7V64H5C2.23858 64 0 61.7614 0 59V54Z" fill="white"/>
                </svg>
                <p className="text-white text-lg md:text-xl lg:text-2xl font-black mt-4">
                  Your AI team: +41 411 441 41 41
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#231F1F] py-12 md:py-16">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <svg className="w-48 md:w-96 h-16 md:h-20" viewBox="0 0 386 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.52413 35.0689V27.3965H42.6771V20.9184H9.65692C7.84957 20.9184 6.09646 20.1946 4.81325 18.9099C3.53004 17.6251 2.80713 15.8699 2.80713 14.0603V7.23844C2.80713 3.45653 5.86159 0.398438 9.63893 0.398438H48.6594V8.07082H11.3739V13.2461H44.3579C46.1833 13.2461 47.9184 13.9699 49.2016 15.2546C50.4848 16.5394 51.2078 18.2765 51.2078 20.1042V28.2289C51.2078 30.0384 50.4848 31.7937 49.2016 33.0784C47.9184 34.3632 46.1833 35.087 44.3579 35.087H4.50603L4.52413 35.0689Z" fill="white"/>
                <circle cx="27" cy="70" r="6" fill="white"/>
                <path d="M0 54C0 51.2386 2.23858 49 5 49H7V64H5C2.23858 64 0 61.7614 0 59V54Z" fill="white"/>
              </svg>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-medium max-w-[600px]">
                Transforming business communication with AI voice agents that sound indistinguishable from your best staff members.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">Powered by</p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/39de8b8222137408df1e44bf173be8ea67db51e4?width=594" 
                alt="Deep Impact" 
                className="h-8 md:h-12"
              />
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-white text-xs md:text-[13px] font-black">
                <button className="hover:underline">Impressum</button>
                <button className="hover:underline">Consent Declaration</button>
                <button className="hover:underline">Privacy Policy</button>
                <button className="hover:underline">Terms of Service</button>
                <button className="hover:underline">Careers: Werde Tester</button>
              </nav>
              <p className="text-white text-xs md:text-[13px] font-black">
                © 2025 Deep Impact AG. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="text-3xl md:text-4xl">💬</div>
        </button>
        <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="text-3xl md:text-4xl">📞</div>
        </button>
      </div>
    </div>
  );
}
