// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import "./globals.css";

// // const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>{children}</body>
// //     </html>
// //   );
// // }

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en">
//             <body className={inter.className}>
//                 <div className="px-12">{children}</div>
//             </body>
//         </html>
//     );
// }

import { Metadata, Viewport } from "next";
import localFont from "next/font/local";

// import Providers from '@/providers';

import "@/app/globals.css";

export const metadata: Metadata = {
    title: { template: "Dodo | %s", default: "Dodo" },
    description: "Dodo",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
};

// const pretendard = localFont({
//     src: [
//         {
//             path: "../public/fonts/Pretendard-Normal.otf",
//             weight: "400",
//             style: "normal",
//         },
//         {
//             path: "../public/fonts/Pretendard-Medium.otf",
//             weight: "500",
//             style: "medium",
//         },
//         {
//             path: "../public/fonts/Pretendard-SemiBold.otf",
//             weight: "600",
//             style: "semibold",
//         },
//         {
//             path: "../public/fonts/Pretendard-Bold.otf",
//             weight: "700",
//             style: "bold",
//         },
//     ],
//     display: "swap",
//     variable: "--font-pretendard",
// });

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="ko"
            suppressHydrationWarning
            // className={`${pretendard.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
