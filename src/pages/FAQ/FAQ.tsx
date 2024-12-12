import React from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import Header from "organisms/Header";
import PageContainer from "atoms/PageContainer";
import Footer from "organisms/Footer";

const FAQ = () => {
	return (
		<>
			<Header />

			<PageContainer>
				<Text as="h3" color="flamingo" fontStyleGuide="heading3" align="center" mb="2xl">Frequently Asked Questions</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">How do I book a consultation or home visit?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				You can easily book a consultation by visiting our website and filling out the appointment form. Alternatively, you can WhatsApp us for assistance.
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Is there a fee for the home visit and consultation?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				No, our initial home visit and consultation are free of charge. This includes fabric selection and measurements.
				</Text><Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Can I see fabric samples before placing an order?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				Yes, during the home visit, our experts will bring a variety of fabric samples for you to choose from. You can match them with your interior decor.
				</Text><Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">How long does it take to complete an order?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				After the visit you’ll receive a final quote and payment link. Once your payment is processed, you’ll receive your curtains in 5 days!
				</Text><Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Do you provide installation services?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				Yes, our team handles the entire process, from measurement to installation, ensuring a hassle-free experience for you.
				</Text><Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">What areas do you serve?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				Our services are available in Dubai as of now and we are in process of adding more emirates. If you're unsure, contact us to confirm service availability in your area.
				</Text><Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Can I cancel or modify my order?</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				You can cancel or modify your order within 24 hours of confirmation. Once the production of your order begins, any cancellation or modification can not be made.
				</Text>
			</PageContainer>
			<Footer />
		</>
	)
}

export default FAQ;
