"use client";
import Footer from "@/components/layout/footer/Footer";
import NavBar from "@/components/layout/navbar/Navbar";
import BorderedPageWrapper from "@/components/layout/wrappers/BorderedPageWrapper/BorderedPageWrapper";
import Link from "next/link";

const CookiePolicy = () => {
  return (
    <>
      <BorderedPageWrapper>
        <div className="">
          <div className="bg-[#0F0F0F] lg:rounded-t-2xl lg:px-20 px-4">
            <NavBar dark={true} />
          </div>

          <div className="bg-[#0F0F0F] md:py-14 py-4 px-[calc(60/1420*100vw)] ">
            <h2 className="text-[#fff] lg:text-[97px] md:text-[75px] text-[45px] text-center font-floral-serif">
              COOKIE POLICY
            </h2>
            <p className="md:text-[18px] text-[#fff] text-[16px] text-center font-archivo md:mx-0 mx-2 ">
              Embark on a captivating visual journey through our gallery, where
              every image <br /> unfolds a narrative of elegance, showcasing the
              exquisite creations that define
              <br /> our commitment to unparalleled luxury.
            </p>

            <hr className="h-1 w-11/12 mx-auto mt-14" />
          </div>

          {/* cookie policy main section */}
          <div className="text-[#000] md:pt-20 pt-8 lg:px-[65px] md:mx-[40] px-5 bg-[#fff]">
            <div>
              <h2 className="md:text-[30px] text-[26px] font-[500] font-archivo text-[#364A63]">
                What is a cookie?
              </h2>
              <p className="md:mt-3 mt-2 md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                Cookies are text files containing small amounts of information
                which are downloaded to your personal computer, mobile or other
                device when you visit a website. Cookies are then sent back to
                the originating website on each subsequent visit, or to another
                website that recognises that cookie. Cookies are useful because
                they allow a website to recognise a user's device.
              </p>
            </div>

            <div className="md:mt-6 mt-4">
              <h2 className="md:text-[30px] text-[24px] font-[500] font-archivo text-[#364A63]">
                How long are cookies stored for?
              </h2>

              <div className="flex  gap-3 md:pl-5 pl-4 mt-4">
                <div>
                  <p className="w-[5px] h-[5px] bg-[#364A63] rounded-full mt-[11px]"></p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                    Persistent cookies - these cookies remain on a user's device
                    for the period of time specified in the cookie. They are
                    activated each time that the user visits the website that
                    created that particular cookie.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:pl-5 pl-4 mt-4">
                <div>
                  <p className="w-[5px] h-[5px] bg-[#364A63] rounded-full mt-[11px]"></p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                    Session cookies - these cookies allow website operators to
                    link the actions of a user during a browser session. A
                    browser session starts when a user opens the browser window
                    and finishes when they close the browser window. Session
                    cookies are created temporarily. Once you close the browser,
                    all session cookies are deleted.
                  </p>
                </div>
              </div>

              <p className="md:text-[18px] text-[16px] mt-4 font-archivo text-justify text-[#526484] font-[400]">
                Cookies do lots of different jobs, like letting you navigate
                between pages efficiently, remembering your preferences, and
                generally improve the user experience.
              </p>
            </div>

            <div className="md:mt-6 mt-4">
              <h2 className="md:text-[30px] text-[24px] font-[500] font-archivo text-[#364A63]">
                Types of cookies used on this website?
              </h2>

              <div className="flex  gap-3 md:pl-5 pl-4 mt-4">
                <div>
                  <p className="w-[5px] h-[5px] bg-[#364A63] rounded-full mt-[11px]"></p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                    Strictly necessary cookies - These cookies enable services
                    you have specifically asked for. These cookies are essential
                    in order to enable you to move around the Website and use
                    its features, such as accessing secure areas of the Website.
                  </p>
                </div>
              </div>

              <div className="flex  gap-3 md:pl-5 pl-4 mt-4">
                <div>
                  <p className="w-[5px] h-[5px] bg-[#364A63] rounded-full mt-[11px]"></p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                    Performance cookies - These cookies collect anonymous
                    information on the pages visited. By using the Website, you
                    agree that we can place these types of cookies on your
                    device. These cookies collect information about how visitors
                    use the Website, for instance which pages visitors go to
                    most often, and if they get error messages from web pages.
                    These cookies don't collect information that identifies a
                    visitor. All information these cookies collect is aggregated
                    and therefore anonymous. It is only used to improve how the
                    Website works.
                  </p>
                </div>
              </div>

              <div className="flex  gap-3 md:pl-5 pl-4 mt-4">
                <div>
                  <p className="w-[5px] h-[5px] bg-[#364A63] rounded-full mt-[11px]"></p>
                </div>
                <div>
                  <p className="md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                    Functionality cookies - These cookies allow the Website to
                    remember choices you make (such as your user name, language
                    or the region you are in) and provide enhanced, more
                    personal features. These cookies can also be used to
                    remember changes you have made to text size, fonts and other
                    parts of web pages that you can customise. They may also be
                    used to provide services you have asked for such as watching
                    a video or commenting on a blog. The information these
                    cookies collect may be anonymised and they cannot track your
                    browsing activity on other websites.
                  </p>
                </div>
              </div>

              <div className="flex  gap-3 ml-5 mt-4">
                <span className="w-[5px] h-[5px] bg-[#364A63] rounded-full  mt-[10px]"></span>
                <p className="md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                  Google Analytics - We use Google Analytics to analyse the use
                  of this website. Google Analytics generates statistical and
                  other information about website use. The information generated
                  relating to our website is used to create reports about the
                  use of the website. Google will store this information.
                  Google's privacy policy is available at:
                  <Link href="http://www.google.com/privacypolicy.html">
                     http://www.google.com/privacypolicy.html
                  </Link>
                </p>
              </div>
            </div>

            <div className="md:mt-7 mt-5">
              <h2 className="md:text-[30px] text-[24px] font-[500] font-archivo text-[#364A63]">
                Cookies we use
              </h2>
              <p className="md:text-[18px] text-[16px] mt-2 font-archivo text-[#526484] font-[400]">
                We use the following cookies:
              </p>

              <h2 className="md:text-[30px] text-[24px] font-[500] md:mt-4 mt-2 font-archivo text-[#364A63]">
                Opt-Out
              </h2>
              <p className="mt-2 md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                In order to provide website visitors with more choice on how
                data is collected by Google Analytics, Google has developed the
                Google Analytics Opt-out Browser Add-on. The add-on communicates
                with the Google Analytics JavaScript (ga.js) to stop data being
                sent to Google Analytics. The Google Analytics Opt-out Browser
                Add-on does not affect usage of the website in any other way. A
                link to further information on the Google Analytics Opt-out
                Browser Add-on is provided below for your convenience.
              </p>

              <p className="mt-4  md:text-[18px] text-[16px] text-[#526484] font-[500]">
                Download the Addon 
                <Link href="">
                  <u>Click here</u>
                </Link>
              </p>
              <p className="mt-4  md:text-[18px] text-[16px] font-archivo text-[#526484] font-[400] md:text-start text-justify">
                For more information on the usage of cookies by Google Analytics
                please see the Google website. A link to the privacy advice for
                this product is provided below for your convenience.
                <Link href="">
                  <u>Click here</u>
                </Link>
              </p>
            </div>

            <div className="md:mt-6 mt-4">
              <h2 className="md:text-[30px] text-[24px] font-[500] font-archivo text-[#364A63]">
                Third Party Cookies
              </h2>
              <p className="md:text-[18px] text-[16px] mt-2 font-archivo text-[#526484] font-[400] md:text-start text-justify">
                These cookies allow third parties to track the success of their
                application or customise the application for you. Because of how
                cookies work we cannot access these cookies, nor can the third
                parties access the data in cookies used on our site. For
                example, if you choose to ‘share’ content through Twitter or
                other social networks you might be sent cookies from these
                websites. We don't control the setting of these cookies, so
                please check those websites for more information about their
                cookies and how to manage them.
              </p>
            </div>

            <div className="md:mt-6 mt-4">
              <h2 className="md:text-[30px] text-[24px] font-[500] font-archivo text-[#364A63]">
                Disabling Cookies
              </h2>
              <p className="md:text-[18px] text-[16px] mt-3 text-[#526484] font-[400] md:text-start text-justify">
                If you would like to restrict the use of cookies you can control
                this in your Internet browser. Links to advice on how to do this
                for the most popular Internet browsers are provided below for
                convenience and will be available for the Internet browser of
                your choice either online or via the software help (normally
                available via key F1).
              </p>

              <div className="ml-3">
                <div className="flex gap-3">
                  <span className="w-[6px] h-[6px] bg-[#364A63] rounded-full mt-[30px]"></span>
                  <p className="md:text-[18px] text-[16px] mt-5 text-[#526484] font-[400]">
                    <Link href="">
                      <u>Internet Explorer</u>
                    </Link>
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="w-[6px] h-[6px] bg-[#364A63] rounded-full mt-[20px]"></span>
                  <p className="md:text-[18px] text-[16px] mt-2 text-[#526484] font-[400]">
                    <Link href="">
                      <u>Google Chrome</u>
                    </Link>
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="w-[6px] h-[6px] bg-[#364A63] rounded-full mt-[20px]"></span>
                  <p className="md:text-[18px] text-[16px] mt-2 text-[#526484] font-[400]">
                    <Link href="">
                      {" "}
                      <u>Mozila Firefox</u>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <Footer />
          </div>
        </div>
      </BorderedPageWrapper>
    </>
  );
};

export default CookiePolicy;
