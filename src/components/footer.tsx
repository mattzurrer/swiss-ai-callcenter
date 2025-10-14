import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="bg-[color:var(--sac-grey-900)]">
        <div className="bg-[color:var(--sac-grey-700)] border-b-2 border-white">
            <div className="grid md:grid-cols-2 gap-8 px-12 py-12  max-w-[1416px] mx-auto">
                <div className="flex flex-col gap-4 align-start max-w-[636px]">
                    {/* SAC Logo Placeholder */}
                    <Image
                    src="/images/swiss-ai-callcenter.svg"
                    alt="SAC Logo"
                    width={213}
                    height={20}
                    className="h-12"
                    />
                    <p className="text-white max-w-[636px]">
                    Transforming business communication with AI voice agents that sound indistinguishable from your best staff members.
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4">
                    <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">Powered by</p>
                    
                    <Link href="https://deep-impact.ch" target="_blank" rel="noopener noreferrer">
                      <Image
                      src="/images/deep-impact.svg"
                      alt="Deep Impact"
                      width={389}
                      height={42}
                      className="h-8 md:h-8 w-auto"
                      />
                    </Link>
                </div>
              </div>
        </div>

        <div className="py-8">
          <div className="max-w-[1416px] mx-auto px-12 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-white">
                      <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link href="/tos" className="hover:underline">Terms of Service</Link>
            </p>
            <p className="text-white">
              © 2025 Swiss AI Call Center. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
}
