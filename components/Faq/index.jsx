import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import styles from "./faqSect.module.css"

export default function Faq() {
  return (
    <div className={styles.faqCont}>
      <h4>Ən çox verilən suallar</h4>
      <div
        style={{
          maxWidth: "1310px",
          margin: "auto",
       
          marginBottom: "84px",
        }}
      >
        <div className="pt-32 px-4">
          <div className="mx-auto MyWidth-800">
            <div className="mx-auto h-127 bg-white rounded-xl divide-y divide-black/5 shadow-lg">
              <Disclosure as="div" className="p-6 mb-4" defaultOpen={true}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-3xl font-medium text-black group-data-[hover]:text-black/80">
                    Hansı böyük layihələriniz var?
                  </span>
                  <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-3xl text-slate-400">
                  If youre unhappy with your purchase, well refund you in
                  full.
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="p-6 mb-4">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-3xl font-medium text-black group-data-[hover]:text-black/80">
                    İstehsalat ilə məşğulsunuz?
                  </span>
                  <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-3xl text-slate-400">
                  No.
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="p-6 mb-4">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-3xl font-medium text-black group-data-[hover]:text-black/80">
                    Hansı şirkətlərin məhsulları satışda var?
                  </span>
                  <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-3xl text-slate-400">
                  No.
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" className="p-6 mb-4">
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-3xl font-medium text-black group-data-[hover]:text-black/80">
                    Hansı şirkətlərin məhsulları satışda var?
                  </span>
                  <ChevronDownIcon className="size-12 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-3xl text-slate-400">
                  No.
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.faqMoreBtn}>Daha çox</button>
    </div>
  );
}
