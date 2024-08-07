import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import styles from "./faqSect.module.css";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function Faq({ aboutInfo }) {
  const { faq } = aboutInfo;
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  return (
    <div className={styles.faqCont}>
      <h4> {t("Ən Çox Verilən Suallar")}</h4>
      <div className={styles.faqSection}>
        <div className="pt-32 px-4">
          <div className="mx-auto MyWidth-800">
            <div className="mx-auto h-127 bg-white rounded-xl divide-y divide-black/5 shadow-lg">
              {faq &&
                faq.map((item, index) => (
                  <Disclosure
                    as="div"
                    className="p-6 mb-4"
                    key={index}
                    defaultOpen={index === 0}
                  >
                    <DisclosureButton className="group flex w-full items-center">
                      <span className="text-3xl text-black/80 group-hover:text-black/90 flex-1 text-left">
                        {item.question}
                      </span>
                      <ChevronDownIcon className="size-12 fill-black group-hover:fill-black/50 group-open:rotate-180 ml-4" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-3xl text-slate-400">
                      {item.answer}
                    </DisclosurePanel>
                  </Disclosure>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <button className={styles.faqMoreBtn}>{t("ətraflı")}</button> */}
    </div>
  );
}
