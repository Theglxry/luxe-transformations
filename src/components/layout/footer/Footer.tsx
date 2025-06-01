"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants";
import call_white from "@/assets/icons/call_white.svg";
import whatsapp_white from "@/assets/icons/whatsapp_white.svg";
import { quickLinks } from "./data";
import { useWindowSize } from "@react-hook/window-size";

function Footer() {
  const [windowWidth] = useWindowSize();




  
  return (
    <footer className={styles.footer_container}>
      <main className={styles.footer_inner}>
        <div>
          <Link href={"/"}>
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={300}
              height={100}
              className={styles.logo}
            />
          </Link>

          <h4 className={styles.title_1}>Find Us On Social Media</h4>
          <div className={styles.socials}>
            {socialLinks.map((socail, idx) => (
              <Link href={socail.url} key={`${idx}`}>
                <Image src={socail.img} alt={socail.label} />
              </Link>
            ))}
          </div>

          <h4 className={styles.title_1}>Our Info</h4>
          <div className={styles.our_info}>
            <div>
              <Image src={call_white} alt={call_white} />
              <span>
                0121 272 9229 
                <br />
                (Fri-Sat)
              </span>
            </div>
            <div>
              <Image src={whatsapp_white} alt={whatsapp_white} />
              <span>+447301253447</span>
            </div>
          </div>
        </div>

        <div className="flex gap-[24px]">
          {quickLinks.map((item, i) => {
            if (windowWidth < 720 && item?.hideInSmallScreen) return null;
            return (
              <div className={styles.linkColumn} key={`${i}`}>
                <h4 className={styles.title_2}>{item.title}</h4>
                {item?.children?.length
                  ? item.children.map((child, indx) => (
                      <Link href={child.link} key={`${indx}`}>
                        <span style={{ color: "#A9A9A9 !important" }}>
                          {child.title}
                        </span>
                      </Link>
                    ))
                  : null}
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <div className={styles.divider} />
          <p className={styles.title_3}>
            Copyright © 2024 John Clive Industries Ltd. Registered in England
            and Wales, UK.
          </p>
          <p className={styles.title_3}>
            All rights reserved Website Developed by Lintech Group
          </p>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
