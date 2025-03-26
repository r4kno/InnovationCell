import anlytics from "../company/analytical_mindset.webp";
import atl from "../company/atl.png";
import design_thinking from "../company/design_thinking.webp";
import elevatex from "../company/elevateX.webp";
import expert_panel_session from "../company/expert_panel_session.webp";
import silicon_vally from "../company/silicon_vallly.jpg";
import seedgrant from "../company/seedgrant.webp";
import avinya from "../company/Image1.jpg";
import mad_over_marketing from "../company/Image2.jpg"; // ✅ Missing import added
import icon from "../company/icon.webp";

const experiences = [
  {
    title: "🔥 Rebuild. Reinvent. Innovate! 🚀",
    company_name: "Avinya’25 - Rebuilding Brands",
    icon: icon,
    pic: avinya,
    iconBg: "rgba(255, 255, 255, 0.4)",
    date: "29th March",
    points: [
      "Are you ready to take on the ultimate branding & marketing challenge? Solve real-world business problems, redefine branding, and showcase your marketing genius! 📊⚡"
    ],
    venue: "DDU Auditorium",
    time: "12-1 PM",
    cta: "💡 Think. 💬 Pitch. 🏆 Win. Elevate your branding skills & stand out! 🚀"
  },
  {
    title: "🚀 Get Ready to Go Beyond Orbit! 🚀",
    company_name: "Mad Over Marketing",
    icon: icon,
    pic: mad_over_marketing, // ✅ Fixed missing import
    iconBg: "rgba(255, 255, 255, 0.4)",
    date: "March 28, 2025",
    points: [
      "The Innovation Cell, NIT Raipur, brings you an electrifying event – 'Mad Over Marketing', where creativity meets strategy! This is your chance to showcase your business intelligence, innovation, and marketing prowess in an intense yet exciting Business Model Development challenge."
    ],
    venue: "E-Hall, NIT Raipur",
    prize: "🏆 Winning Prize: Worth up to ₹16K",
    cta: "🔴 Register Now on Unstop! 📌 Scan the QR code & secure your spot!"
  }  
];

export { experiences };
