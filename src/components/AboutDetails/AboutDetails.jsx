import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-xl mt-9 md:text-3xl'>About Us</h1>
            <div className="join join-vertical w-full py-16">
                {/* Vision Section */}
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Our Vision</div>
                    <div className="collapse-content">
                        <p>
                            Our goal is to be the trusted platform that helps travelers worldwide access accurate visa information and secure their travel documentation with ease.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Our Mission</div>
                    <div className="collapse-content">
                        <p>
                            We simplify the visa application process by offering comprehensive details on visa types, requirements, and fees. Our aim is to make your journey hassle-free with just a few clicks.
                        </p>
                    </div>
                </div>

                {/* What We Do Section */}
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What We Do</div>
                    <div className="collapse-content">
                        <ul className="list-disc list-inside">
                            <li>Provide detailed visa information for a wide range of countries.</li>
                            <li>Offer easy-to-follow online visa application services.</li>
                            <li>Keep you updated with real-time news on travel restrictions and visa requirements.</li>
                            <li>Ensure a seamless experience for travelers worldwide.</li>
                        </ul>
                    </div>
                </div>

                {/* Why Choose Visa Nexus Section */}
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Why Choose Visa Nexus?</div>
                    <div className="collapse-content">
                        <ul className="list-disc list-inside">
                            <li>Accurate and up-to-date visa information for over 100 countries.</li>
                            <li>Easy-to-follow application process with real-time status tracking.</li>
                            <li>Comprehensive support from our dedicated team for any queries.</li>
                            <li>A one-stop solution for all your visa-related needs.</li>
                        </ul>
                    </div>
                </div>

                {/* Additional Questions & Answers */}
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How Do I Apply for a Visa?</div>
                    <div className="collapse-content">
                        <p>
                            To apply for a visa, simply select the country you're interested in, review the visa requirements, and submit your application through our easy-to-use online platform. You'll be guided every step of the way.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How Long Does It Take to Get My Visa?</div>
                    <div className="collapse-content">
                        <p>
                            The processing time varies depending on the country and visa type. On average, it can take anywhere from a few days to a couple of weeks. We provide you with estimated timelines for each visa application.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What If My Visa Gets Denied?</div>
                    <div className="collapse-content">
                        <p>
                            If your visa gets denied, we offer advice on the next steps and help you understand the reason behind the rejection. Our team can assist you in preparing a stronger application for a re-application if necessary.
                        </p>
                    </div>
                </div>



            </div>
            <div className="mt-4 mb-6 text-center">
                <Link to="/allVisa" className="btn btn-outline border-b-8 ">
                    Get Started
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
