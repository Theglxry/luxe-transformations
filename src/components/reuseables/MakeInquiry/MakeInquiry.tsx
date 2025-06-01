import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_inner}>
        <h1>Let's Craft Your Luxury Action Plan</h1>
        <p>
          Join our community of satisfied clients and discover why Luxe Transformation is trusted by Industry leaders
        </p>
        <Link href={"/contact"}>
          <button>Make An Inquiry</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
