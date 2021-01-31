import Link from "next/link";
import { Widont } from "../Widont";
import { BigText } from "./common";


export function Footer() {

  return(
          <footer className="bg-gray-50 pt-16 px-4 sm:pt-12 md:pt-24 xl:pt-20 ">  
              <div className="w-full divide-y space-y-8 max-w-screen-lg xl:max-w-screen-xl mx-auto">
                  <div className="flex flex-wrap md:flex-nowrap space-x-8">
                      <div className="md:w-1/2 xl:w-1/3">
                          <BigText className="mb-8">
                            <Widont>Need help creating your billion dollar app?</Widont>
                          </BigText>
                          
                          <p className="md:text-xl">We’d love to help you out! Tell us a bit about you and your awesome project, then we’ll be in touch.</p>
                          <p className="py-8">
                              <a href="https://ojn1yd5k2bm.typeform.com/to/nA3tGPK2" target="_blank" className="text-white bg-red-600 font-bold py-2 px-8 rounded-full">Tell us your idea</a>
                          </p>
                      </div>
                      <div className="md:w-1/2 space-y-4">
                        <h3 className="text-3xl font-bold text-gray-800">Services</h3>
                        <ul className="space-y-4 font-medium">
                          <li>
                            <Link href="/services/enterprise">
                              Custom Enterprise Software
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/webdev">
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/mobile">
                              Mobile Application Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/digital">
                              Digital Product Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/data">
                              Data Science & Machine Learning
                            </Link>
                          </li>
                        </ul>
                      </div>
                  </div>
                  <div className="mx-auto p-4 flex">
                      <p className="text-center">Tachom Developer Group {new Date().getFullYear()} &copy; &bull; Tachom Developer Group is a corporate division of Varisync (Private) Limited</p>
                  </div>
              </div>
          </footer>
          
  )
}
