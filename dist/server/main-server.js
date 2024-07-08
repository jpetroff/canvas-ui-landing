import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import * as React from "react";
import { Dialog, Button } from "@ariakit/react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
const SvgGithubLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 22, height: 22, viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.0091 0C4.92135 0 0 5.04165 0 11.2788C0 16.2646 3.15328 20.4849 7.52772 21.9786C8.07463 22.0909 8.27497 21.7359 8.27497 21.4373C8.27497 21.1758 8.25694 20.2796 8.25694 19.3457C5.19447 20.0181 4.55674 18.0012 4.55674 18.0012C4.06458 16.694 3.33536 16.3581 3.33536 16.3581C2.33302 15.6671 3.40837 15.6671 3.40837 15.6671C4.52024 15.7419 5.10366 16.8249 5.10366 16.8249C6.08775 18.5427 7.67352 18.0573 8.31147 17.7585C8.40251 17.0302 8.69434 16.5261 9.00419 16.246C6.56165 15.9845 3.9918 15.0136 3.9918 10.6812C3.9918 9.44873 4.42897 8.4404 5.12169 7.6562C5.01239 7.37616 4.62953 6.21818 5.23121 4.66834C5.23121 4.66834 6.16076 4.3695 8.25671 5.82608C9.15407 5.57919 10.0795 5.4536 11.0091 5.45254C11.9387 5.45254 12.8862 5.58339 13.7613 5.82608C15.8574 4.3695 16.787 4.66834 16.787 4.66834C17.3887 6.21818 17.0056 7.37616 16.8963 7.6562C17.6073 8.4404 18.0264 9.44873 18.0264 10.6812C18.0264 15.0136 15.4566 15.9657 12.9958 16.246C13.3969 16.6008 13.743 17.2729 13.743 18.3374C13.743 19.8499 13.725 21.0638 13.725 21.4371C13.725 21.7359 13.9255 22.0909 14.4722 21.9788C18.8467 20.4847 22 16.2646 22 11.2788C22.018 5.04165 17.0786 0 11.0091 0Z", fill: "currentColor" }));
const SvgLinkedinLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 43, height: 42, viewBox: "0 0 43 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_60_19922)" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.3333 42C32.9312 42 42.3333 32.598 42.3333 21C42.3333 9.40202 32.9312 0 21.3333 0C9.73527 0 0.333252 9.40202 0.333252 21C0.333252 32.598 9.73527 42 21.3333 42ZM33.3333 30.3333C33.3333 31.8061 32.1393 33 30.6666 33H11.9999C10.5272 33 9.33325 31.8061 9.33325 30.3333V11.6667C9.33325 10.1939 10.5272 9 11.9999 9H30.6666C32.1393 9 33.3333 10.1939 33.3333 11.6667V30.3333Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30 29.6666H26.4385V23.6006C26.4385 21.9375 25.8066 21.0081 24.4902 21.0081C23.0582 21.0081 22.31 21.9753 22.31 23.6006V29.6666H18.8777V18.111H22.31V19.6676C22.31 19.6676 23.342 17.758 25.7941 17.758C28.2452 17.758 30 19.2547 30 22.3503V29.6666ZM14.7831 16.5979C13.614 16.5979 12.6666 15.6431 12.6666 14.4656C12.6666 13.288 13.614 12.3333 14.7831 12.3333C15.9522 12.3333 16.899 13.288 16.899 14.4656C16.899 15.6431 15.9522 16.5979 14.7831 16.5979ZM13.0108 29.6666H16.5898V18.111H13.0108V29.6666Z", fill: "currentColor" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_60_19922" }, /* @__PURE__ */ React.createElement("rect", { x: 0.333252, width: 42, height: 42, rx: 21, fill: "white" }))));
const SvgKoFiLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 43, height: 42, viewBox: "0 0 43 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_61_19938)" }, /* @__PURE__ */ React.createElement("circle", { cx: 21.5, cy: 21, r: 21, fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36.4643 18.5722L36.4635 18.5672L36.4627 18.5622C35.9927 16.2065 34.6999 14.9307 33.6972 14.2756C32.5227 13.4535 31.0563 13.0006 29.5679 13.0006L10.6444 12.9998C9.58031 12.9998 9.01318 13.9804 9.01318 14.6883V14.9041L9.01307 14.9234C9.01042 15.3761 8.96333 23.4273 9.06591 27.7948C9.06591 27.8036 9.06632 27.8127 9.06715 27.8214C9.17219 29.5211 10.1333 30.3336 10.9217 30.716C11.7277 31.1068 12.5169 31.1157 12.5654 31.1162L12.5666 31.1162H12.57C12.9237 31.1162 21.2848 31.1158 25.383 31.0639H25.383C25.6209 31.0639 25.8459 31.0639 26.1457 30.9917L26.156 30.9892C27.4028 30.6703 28.2913 29.9409 28.7965 28.8207C29.0353 28.2914 29.1797 27.6948 29.2362 27.0006C30.38 26.9716 31.4557 26.7457 32.4359 26.328C33.4685 25.888 34.3428 25.2577 35.0341 24.4544C36.3917 22.8767 36.8994 20.788 36.4643 18.5722ZM19.1051 26.9751C19.2276 26.9996 19.3339 26.8933 19.3339 26.8933C19.3339 26.8933 22.3588 24.1424 23.7343 22.5506C24.9424 21.122 24.9997 18.7547 22.9629 17.8771C20.8729 16.9952 19.1666 18.9216 19.1666 18.9216C17.6807 17.2726 15.4275 17.3826 14.3825 18.4807C13.3376 19.5788 13.7212 21.4521 14.4926 22.5502C15.1467 23.4585 18.3512 26.3505 18.9188 26.8628L18.9188 26.8628L18.9619 26.9017C19.0026 26.9382 19.0516 26.9668 19.1047 26.9751H19.1051ZM29.183 23.8095C28.8301 23.8095 28.6043 23.7946 28.5798 23.7929C28.2161 23.768 27.9313 23.4628 27.9313 23.0983V16.8857C27.9317 16.5017 28.2439 16.1895 28.6279 16.1895H29.8934C30.955 16.1895 31.9053 16.6295 32.5687 17.4287C33.1155 18.0594 33.3941 18.8598 33.3941 19.8044C33.3941 21.8184 32.4724 23.132 30.6552 23.709C30.6116 23.7227 30.5664 23.7323 30.5211 23.7373C30.0898 23.785 29.6397 23.8095 29.183 23.8095Z", fill: "#242429" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_61_19938" }, /* @__PURE__ */ React.createElement("rect", { x: 0.5, width: 42, height: 42, rx: 21, fill: "white" }))));
const AvatarUri = "/assets/avatar-C_6lK6Km.png";
const LinkPromo = (props) => {
  const { children, href, title, className, ...intrinsicProps } = props;
  return /* @__PURE__ */ jsx(
    "a",
    {
      className: `${className || ""} flex flex-col gap-2 border-none border-zinc-600 py-4 text-zinc-250 hover:text-zinc-50 hover:border-zinc-400 bg-[radial-gradient(94%_64%_at_0%_0%,_rgba(75,_75,_82,_0.12)_0%,_rgba(36,_36,_41,_0)_100%)] hover:bg-[radial-gradient(118%_82%_at_0%_0%,_rgba(75,_75,_82,_0.24)_0%,_rgba(36,_36,_41,_0)_100%)] transition-all`,
      href,
      title: `${title || ""}`,
      style: { backdropFilter: "blur(10px)" },
      target: href[0] == "#" ? "" : "_blank",
      ...intrinsicProps,
      children
    }
  );
};
const Contacts = () => {
  const [openDialog, setOpenDialog] = React.useState(typeof window !== "undefined" ? window.location.hash == "#donate" : false);
  return /* @__PURE__ */ jsxs("div", { className: `w-[960px] mobile:w-full flex flex-row mobile:flex-col mt-[192px] mobile:mt-8 gap-24 mobile:gap-16`, children: [
    /* @__PURE__ */ jsxs("div", { className: `flex-grow`, children: [
      /* @__PURE__ */ jsxs("div", { className: `typo-h-base text-zinc-250`, children: [
        "If you ",
        /* @__PURE__ */ jsx("strong", { className: "text-zinc-50 font-medium", children: "find Canvas UI useful" }),
        " for your work",
        /* @__PURE__ */ jsx("br", { className: "mobile:hidden" }),
        " or would like to ",
        /* @__PURE__ */ jsx("strong", { className: "text-zinc-50 font-medium", children: "contribute" }),
        " to the roadmap",
        /* @__PURE__ */ jsx("br", {}),
        "reach me out"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-4 mt-6`, children: [
        /* @__PURE__ */ jsx(LinkPromo, { href: "mailto:petrov.eugene.a@gmail.com", className: `typo-sm font-medium flex flex-grow-0 items-center w-20`, children: /* @__PURE__ */ jsxs("span", { className: `flex flex-col gap-1 items-center`, children: [
          /* @__PURE__ */ jsx("img", { width: 42, height: 42, src: AvatarUri }),
          /* @__PURE__ */ jsx("span", { children: "email" })
        ] }) }),
        /* @__PURE__ */ jsx(LinkPromo, { href: "https://github.com/jpetroff/canvas-ui-demo", className: `typo-sm font-medium flex flex-grow-0 items-center w-20`, children: /* @__PURE__ */ jsxs("span", { className: `flex flex-col gap-1 items-center`, children: [
          /* @__PURE__ */ jsx(SvgGithubLogo, { width: 42, height: 42 }),
          /* @__PURE__ */ jsx("span", { children: "github" })
        ] }) }),
        /* @__PURE__ */ jsx(LinkPromo, { href: "https://www.linkedin.com/in/petroveugene/", className: `typo-sm font-medium flex flex-grow-0 items-center w-20`, children: /* @__PURE__ */ jsxs("span", { className: `flex flex-col gap-1 items-center`, children: [
          /* @__PURE__ */ jsx(SvgLinkedinLogo, { width: 42, height: 42 }),
          /* @__PURE__ */ jsx("span", { children: "linkedin" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex-grow`, children: [
      /* @__PURE__ */ jsxs("div", { className: `typo-h-base`, children: [
        "Donate",
        /* @__PURE__ */ jsx("br", {}),
        "to support",
        /* @__PURE__ */ jsx("br", {}),
        "the project"
      ] }),
      /* @__PURE__ */ jsx("div", { className: `flex flex-row gap-4 mt-6`, children: /* @__PURE__ */ jsx(LinkPromo, { href: "#donate", onClick: () => setOpenDialog(true), className: `text-zinc-250 typo-sm font-medium flex flex-grow-0 items-center w-20`, children: /* @__PURE__ */ jsxs("span", { className: `flex flex-col gap-1 items-center`, children: [
        /* @__PURE__ */ jsx(SvgKoFiLogo, { width: 42, height: 42 }),
        /* @__PURE__ */ jsx("span", { children: "ko-fi" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: openDialog,
        onClose: () => {
          typeof window !== "undefined" && (window.location.hash = "");
          setOpenDialog(false);
        },
        className: "dialog dialog-donation",
        children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              id: "kofiframe",
              src: "https://ko-fi.com/eugenepetrov/?hidefeed=true&widget=true&embed=true&preview=true",
              style: { border: "none", width: "100%", padding: "4px", background: "#f9f9f9" },
              height: "712",
              title: "eugenepetrov"
            }
          ),
          /* @__PURE__ */ jsx(Button, { onClick: () => {
            typeof window !== "undefined" && (window.location.hash = "");
            setOpenDialog(false);
          }, children: "Close" })
        ]
      }
    )
  ] });
};
const SvgCanvasBadge = (props) => /* @__PURE__ */ React.createElement("svg", { width: 102, height: 22, viewBox: "0 0 102 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("rect", { width: 102, height: 22, rx: 4, fill: "#37373D" }), /* @__PURE__ */ React.createElement("rect", { width: 102, height: 22, rx: 4, fill: "url(#paint0_linear_29_34794)" }), /* @__PURE__ */ React.createElement("g", { filter: "url(#filter0_d_29_34794)" }, /* @__PURE__ */ React.createElement("path", { d: "M15.28 15.16L9.134 12.178V10.596L15.28 7.614V9.028L11.08 11.03C10.8933 11.114 10.716 11.1887 10.548 11.254C10.38 11.31 10.254 11.3473 10.17 11.366C10.2633 11.3847 10.394 11.422 10.562 11.478C10.7393 11.534 10.912 11.604 11.08 11.688L15.28 13.704V15.16ZM20.8465 16.14C19.8852 16.14 19.1199 15.874 18.5505 15.342C17.9905 14.8007 17.7105 14.0727 17.7105 13.158V8.622C17.7105 7.698 17.9905 6.97 18.5505 6.438C19.1199 5.906 19.8852 5.64 20.8465 5.64C21.7985 5.64 22.5545 5.91067 23.1145 6.452C23.6839 6.984 23.9685 7.70733 23.9685 8.622H22.4565C22.4565 8.09 22.3119 7.684 22.0225 7.404C21.7425 7.124 21.3505 6.984 20.8465 6.984C20.3332 6.984 19.9319 7.124 19.6425 7.404C19.3625 7.684 19.2225 8.09 19.2225 8.622V13.158C19.2225 13.69 19.3625 14.096 19.6425 14.376C19.9319 14.656 20.3332 14.796 20.8465 14.796C21.3505 14.796 21.7425 14.656 22.0225 14.376C22.3119 14.096 22.4565 13.69 22.4565 13.158H23.9685C23.9685 14.0727 23.6839 14.8007 23.1145 15.342C22.5545 15.874 21.7985 16.14 20.8465 16.14ZM28.4991 16.14C27.7151 16.14 27.0897 15.9207 26.6231 15.482C26.1657 15.034 25.9371 14.4507 25.9371 13.732C25.9371 13.004 26.1844 12.4207 26.6791 11.982C27.1737 11.534 27.8317 11.31 28.6531 11.31H30.7811V10.75C30.7811 9.86333 30.2817 9.42 29.2831 9.42C28.8351 9.42 28.4757 9.504 28.2051 9.672C27.9344 9.84 27.7897 10.0733 27.7711 10.372H26.2871C26.3337 9.728 26.6231 9.20067 27.1551 8.79C27.6871 8.37 28.4011 8.16 29.2971 8.16C30.2491 8.16 30.9864 8.38867 31.5091 8.846C32.0317 9.294 32.2931 9.924 32.2931 10.736V16H30.8091V14.558H30.7951C30.7297 15.0527 30.4964 15.44 30.0951 15.72C29.6937 16 29.1617 16.14 28.4991 16.14ZM28.9331 14.894C29.5024 14.894 29.9504 14.7587 30.2771 14.488C30.6131 14.208 30.7811 13.8347 30.7811 13.368V12.374H28.7651C28.3637 12.374 28.0417 12.4907 27.7991 12.724C27.5657 12.9573 27.4491 13.256 27.4491 13.62C27.4491 14.012 27.5797 14.3247 27.8411 14.558C28.1024 14.782 28.4664 14.894 28.9331 14.894ZM34.7796 16V8.3H36.2776V9.77C36.3523 9.266 36.5669 8.874 36.9216 8.594C37.2856 8.30467 37.7569 8.16 38.3356 8.16C39.1009 8.16 39.7123 8.40733 40.1696 8.902C40.6269 9.38733 40.8556 10.0453 40.8556 10.876V16H39.3436V11.1C39.3436 10.568 39.2083 10.162 38.9376 9.882C38.6669 9.59267 38.2983 9.448 37.8316 9.448C37.3556 9.448 36.9776 9.59733 36.6976 9.896C36.4269 10.1947 36.2916 10.61 36.2916 11.142V16H34.7796ZM45.3721 16L42.7681 8.3H44.3641L45.9461 13.228C46.0395 13.5173 46.1235 13.8067 46.1981 14.096C46.2728 14.376 46.3288 14.6093 46.3661 14.796C46.4035 14.6093 46.4501 14.376 46.5061 14.096C46.5715 13.8067 46.6508 13.5173 46.7441 13.228L48.3121 8.3H49.9081L47.3181 16H45.3721ZM54.1027 16.14C53.3187 16.14 52.6933 15.9207 52.2267 15.482C51.7693 15.034 51.5407 14.4507 51.5407 13.732C51.5407 13.004 51.788 12.4207 52.2827 11.982C52.7773 11.534 53.4353 11.31 54.2567 11.31H56.3847V10.75C56.3847 9.86333 55.8853 9.42 54.8867 9.42C54.4387 9.42 54.0793 9.504 53.8087 9.672C53.538 9.84 53.3933 10.0733 53.3747 10.372H51.8907C51.9373 9.728 52.2267 9.20067 52.7587 8.79C53.2907 8.37 54.0047 8.16 54.9007 8.16C55.8527 8.16 56.59 8.38867 57.1127 8.846C57.6353 9.294 57.8967 9.924 57.8967 10.736V16H56.4127V14.558H56.3987C56.3333 15.0527 56.1 15.44 55.6987 15.72C55.2973 16 54.7653 16.14 54.1027 16.14ZM54.5367 14.894C55.106 14.894 55.554 14.7587 55.8807 14.488C56.2167 14.208 56.3847 13.8347 56.3847 13.368V12.374H54.3687C53.9673 12.374 53.6453 12.4907 53.4027 12.724C53.1693 12.9573 53.0527 13.256 53.0527 13.62C53.0527 14.012 53.1833 14.3247 53.4447 14.558C53.706 14.782 54.07 14.894 54.5367 14.894ZM63.0992 16.126C62.2125 16.126 61.5172 15.9253 61.0132 15.524C60.5092 15.1227 60.2572 14.5627 60.2572 13.844H61.7552C61.7552 14.1707 61.8719 14.4273 62.1052 14.614C62.3385 14.7913 62.6699 14.88 63.0992 14.88H63.7152C64.1539 14.88 64.4945 14.7913 64.7372 14.614C64.9799 14.4273 65.1012 14.166 65.1012 13.83C65.1012 13.242 64.7885 12.906 64.1632 12.822L62.1332 12.542C61.5639 12.4673 61.1252 12.2433 60.8172 11.87C60.5092 11.4873 60.3552 10.9927 60.3552 10.386C60.3552 9.686 60.5885 9.14467 61.0552 8.762C61.5312 8.37 62.2032 8.174 63.0712 8.174H63.7012C64.5039 8.174 65.1525 8.36533 65.6472 8.748C66.1512 9.13067 66.4172 9.63467 66.4452 10.26H64.9332C64.9145 10.008 64.7932 9.80267 64.5692 9.644C64.3545 9.476 64.0652 9.392 63.7012 9.392H63.0712C62.6699 9.392 62.3572 9.48067 62.1332 9.658C61.9185 9.83533 61.8112 10.0687 61.8112 10.358C61.8112 10.8433 62.0772 11.1233 62.6092 11.198L64.5132 11.45C65.8852 11.6367 66.5712 12.4253 66.5712 13.816C66.5712 14.5533 66.3239 15.1227 65.8292 15.524C65.3345 15.9253 64.6299 16.126 63.7152 16.126H63.0992ZM77.2283 17.54L82.1563 4.38H83.7383L78.8103 17.54H77.2283ZM85.9448 15.16V13.732L90.1308 11.73C90.3175 11.646 90.4948 11.576 90.6628 11.52C90.8308 11.464 90.9568 11.4267 91.0408 11.408C90.9475 11.38 90.8121 11.338 90.6348 11.282C90.4668 11.226 90.2988 11.156 90.1308 11.072L85.9448 9.07V7.614L92.0908 10.596V12.178L85.9448 15.16Z", fill: "white" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: "filter0_d_29_34794", x: 8.13403, y: 4.38, width: 84.9568, height: 15.16, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", { dy: 1 }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 0.5 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0876863 0 0 0 0 0.0876863 0 0 0 0 0.101961 0 0 0 0.2 0" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_29_34794" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_29_34794", result: "shape" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "paint0_linear_29_34794", x1: 66.9587, y1: -38.8913, x2: 36.8268, y2: 60.7607, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#D97706", stopOpacity: 0.1 }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#4338CA", stopOpacity: 0.1 }))));
const SvgLineRight = (props) => /* @__PURE__ */ React.createElement("svg", { width: 225, height: 13, viewBox: "0 0 225 13", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M215 0.726501L225 6.5L215 12.2735V7.5H0V5.5H215V0.726501Z", fill: "currentColor" }));
const SvgRightArrowMobile = (props) => /* @__PURE__ */ React.createElement("svg", { width: 129, height: 12, viewBox: "0 0 129 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M119 0L129 5.7735L119 11.547V6.7735H0V4.7735H119V0Z", fill: "#72727A" }));
const Scroller = ({ children }) => /* @__PURE__ */ jsxs(ScrollArea.Root, { className: "flex flex-col flex-grow w-full overflow-hidden", type: "auto", children: [
  /* @__PURE__ */ jsx(ScrollArea.Viewport, { className: "w-full h-auto", children }),
  /* @__PURE__ */ jsx(
    ScrollArea.Scrollbar,
    {
      className: "flex rounded-full select-none touch-none p-0 bg-zinc-950/30 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-0.5",
      orientation: "horizontal",
      children: /* @__PURE__ */ jsx(ScrollArea.Thumb, { className: "flex-1 bg-zinc-950 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" })
    }
  )
] });
const LeftFormUri = "/assets/left-reg-form-DZ7L0F_x.png";
const LeftFormUri2x = "/assets/left-reg-form@2x-PprR9u6K.png";
const RightFormUri = "/assets/right-canvas-form-CPptU1vr.png";
const RightFormUri2x = "/assets/right-canvas-form@2x-B6q0ez1t.png";
const FeatureImage = () => {
  return /* @__PURE__ */ jsx("div", { className: `flex flex-row gap-4 items-start w-[960px] mt-[192px] mobile:w-full mobile:-mx-6 mobile:mt-10`, children: /* @__PURE__ */ jsx(Scroller, { children: /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-4 items-start mobile:pb-4`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: LeftFormUri,
        srcSet: `${LeftFormUri}, ${LeftFormUri2x} 2x`,
        className: "flex-shrink-0 mobile:w-[163px] w-[215px]"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col flex-grow mt-11 gap-5 mobile:min-w-48`, children: [
      /* @__PURE__ */ jsx("p", { className: `m-0 p-0 typo-base text-zinc-100 font-medium`, children: "Split lengthy form into manageable blocks" }),
      /* @__PURE__ */ jsxs("p", { className: `m-0 p-0 typo-base text-zinc-100 items-center font-medium`, children: [
        "Put it inside ",
        /* @__PURE__ */ jsx(SvgCanvasBadge, { className: "inline-block -mt-[2px]" }),
        "component on a page"
      ] }),
      /* @__PURE__ */ jsx(SvgLineRight, { className: "text-zinc-600 mobile:hidden" }),
      /* @__PURE__ */ jsx(SvgRightArrowMobile, { className: "hidden text-zinc-600 mobile:block" })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: RightFormUri,
        srcSet: `${RightFormUri}, ${RightFormUri2x} 2x`,
        className: "mt-4 flex-shrink-0 mobile:w-[327px] w-[487px]"
      }
    )
  ] }) }) });
};
const ResizeFeatureUri = "/assets/resize-feature-BOZeuGgP.png";
const ResizeFeatureUri2x = "/assets/resize-feature@2x-CBcHZUko.png";
const ExtraLayersUri = "/assets/extra-layers-feature-3tCIiAbM.png";
const ExtraLayersUri2x = "/assets/extra-layers-feature@2x-BqBUKDSp.png";
const ControlMovementUri = "/assets/control-movement-feature-B-pMhDI5.png";
const ControlMovementUri2x = "/assets/control-movement-feature@2x-BGvMSVUa.png";
const ZoomFeatureUri = "/assets/zoom-feature-CSLHjv-B.png";
const ZoomFeatureUri2x = "/assets/zoom-feature@2x-C2SbjXkc.png";
const ConnectionsFeatureUri = "/assets/connections-feature-bRHgt10P.png";
const ConnectionsFeatureUri2x = "/assets/connections-feature@2x-YfjCxpk_.png";
const FeaturesBlock = () => {
  return /* @__PURE__ */ jsxs("div", { className: `w-[960px] mobile:w-full grid grid-cols-2 mobile:grid-cols-1 grid-rows-[repeat(4,_172px)] mobile:grid-rows-none p-4 mobile:p-0 rounded-3xl ring-1 mobile:ring-0 ring-zinc-700 ring-opacity-30 mt-[114px] mobile:mt-20 gap-4`, children: [
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-between row-span-2 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "w-[360px] min-w-[360px]",
          src: ResizeFeatureUri,
          alt: "Let users move, resize, rearrange",
          srcSet: `${ResizeFeatureUri}, ${ResizeFeatureUri2x} 2x`
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-3`, children: [
        /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-100`, children: "Let users move, resize, rearrange" }),
        /* @__PURE__ */ jsx("span", { className: `typo-sm text-zinc-250`, children: "Form sections can be moved around to keep necessary fields at hand" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-between row-span-2 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: ExtraLayersUri,
          className: `w-[244px] -ml-1.5 -mt-1.5`,
          alt: "Let users move, resize, rearrange",
          srcSet: `${ExtraLayersUri}, ${ExtraLayersUri2x} 2x`
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-3`, children: [
        /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-100`, children: "Add extra layers for collaboration" }),
        /* @__PURE__ */ jsx("span", { className: `typo-sm text-zinc-250`, children: "Notes, comments and what not. Onboarding is also collaboration between your team and your users " })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-between row-span-2 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: ControlMovementUri,
          className: `w-[185px]`,
          alt: "Let users move, resize, rearrange",
          srcSet: `${ControlMovementUri}, ${ControlMovementUri2x} 2x`
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-3`, children: [
        /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-100`, children: "Full control over movement" }),
        /* @__PURE__ */ jsx("span", { className: `typo-sm text-zinc-250`, children: "Define degrees of freedom: sticky items, free positioning, drop zones, CSS grids" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-between row-span-1 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: ZoomFeatureUri,
          className: `w-[226px] -ml-1.5`,
          alt: "Let users move, resize, rearrange",
          srcSet: `${ZoomFeatureUri}, ${ZoomFeatureUri2x} 2x`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `flex flex-col gap-3`, children: /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-100`, children: "Zoom out for bigger picture" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col justify-between row-span-1 mobile:row-span-1 px-8 py-6 mobile:px-4 mobile:py-4 bg-zinc-750 overflow-hidden rounded-2xl border border-[#e8e8ed]/[0.08] backdrop-blur-sm shadow-[0px_2px_16px_-6px_theme(colors.zinc-950)] bg-[radial-gradient(49.02%_125.31%_at_11.73%_0%,_rgb(65,_65,_71)_10.000000149011612%,_rgb(55,_55,_61)_100%)] mobile:gap-6`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: ConnectionsFeatureUri,
          className: `w-[300px] -ml-8`,
          alt: "Let users move, resize, rearrange",
          srcSet: `${ConnectionsFeatureUri}, ${ConnectionsFeatureUri2x} 2x`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `flex flex-col gap-3`, children: /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-100`, children: "Connections and dependencies" }) })
    ] })
  ] });
};
const SvgCanvasLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 462, height: 67, viewBox: "0 0 462 67", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M416.416 1.54999H461.686V15.86H447.196V50.6H461.686V65H416.416V50.6H430.906V15.86H416.416V1.54999Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M353.305 41.42V1.54999H369.685V33.59C369.685 44.66 369.685 51.77 382.825 51.77C395.965 51.77 396.145 44.57 396.145 33.59V1.54999H412.525V41.42C412.525 57.44 402.085 66.17 382.825 66.17C363.655 66.17 353.305 57.44 353.305 41.42Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M307.779 65.9C291.849 65.9 283.659 60.05 283.659 48.53H299.139C299.139 53.03 301.839 55.01 308.139 55.01C312.549 55.01 314.259 54.02 314.259 51.86C314.259 50.33 313.179 49.34 310.839 48.71L296.529 44.84C291.669 43.58 285.009 40.16 285.009 32.06C285.009 23.24 292.839 18.56 305.889 18.56C320.109 18.56 329.019 24.14 329.019 35.21H313.629C313.629 31.25 311.289 29.36 305.979 29.36C302.379 29.36 300.399 30.35 300.399 32.24C300.399 33.86 302.019 34.94 304.899 35.66L315.519 38.18C322.809 39.89 329.739 43.4 329.739 52.13C329.739 60.95 322.629 65.9 307.779 65.9Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M227.367 52.58C227.367 44.66 231.957 39.98 245.907 38.54L259.767 37.01C259.767 32.24 257.067 30.35 251.847 30.35C246.267 30.35 243.117 32.69 242.937 36.74H228.447C228.717 24.77 238.797 18.56 251.307 18.56C263.907 18.56 275.247 24.23 275.247 37.37V51.41H281.817V65H271.377C266.967 65 264.357 62.48 264.357 58.07V57.62L266.787 52.13H263.007C261.297 59.51 256.977 65.9 244.197 65.9C229.797 65.9 227.367 57.26 227.367 52.58ZM242.487 49.97C242.487 52.94 245.187 53.66 248.157 53.66C254.547 53.66 259.767 50.24 259.767 44.75L248.787 46.37C244.737 47 242.487 47.45 242.487 49.97Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M213.731 19.46H228.851L217.781 65H185.831L174.671 19.46H190.151L200.051 61.13H203.921L213.731 19.46Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M122.813 65V19.46H138.203V24.59L135.323 33.14H139.103C140.903 25.04 146.483 18.56 156.203 18.56C167.993 18.56 175.283 26.39 175.283 40.79V65H159.803V43.31C159.803 35.12 157.553 32.15 150.713 32.15C143.243 32.15 138.203 35.66 138.203 48.53V65H122.813Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M66.2533 52.58C66.2533 44.66 70.8433 39.98 84.7933 38.54L98.6533 37.01C98.6533 32.24 95.9533 30.35 90.7333 30.35C85.1533 30.35 82.0033 32.69 81.8233 36.74H67.3333C67.6033 24.77 77.6833 18.56 90.1933 18.56C102.793 18.56 114.133 24.23 114.133 37.37V51.41H120.703V65H110.263C105.853 65 103.243 62.48 103.243 58.07V57.62L105.673 52.13H101.893C100.183 59.51 95.8633 65.9 83.0833 65.9C68.6833 65.9 66.2533 57.26 66.2533 52.58ZM81.3733 49.97C81.3733 52.94 84.0733 53.66 87.0433 53.66C93.4333 53.66 98.6533 50.24 98.6533 44.75L87.6733 46.37C83.6233 47 81.3733 47.45 81.3733 49.97Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M33.726 66.26C12.936 66.26 0.06604 52.04 0.06604 33.23C0.06604 14.51 12.936 0.289993 33.726 0.289993C51.906 0.289993 63.966 10.1 65.856 26.03H49.026C47.676 19.19 41.826 15.14 33.816 15.14C24.006 15.14 16.986 20.72 16.986 33.23C16.986 45.83 24.006 51.41 33.816 51.41C41.826 51.41 47.676 47.27 49.026 40.43H65.856C63.966 56.45 51.906 66.26 33.726 66.26Z", fill: "currentColor" }));
const Footer = () => {
  return /* @__PURE__ */ jsx("div", { className: `w-full h-[160px] mt-[170px] mobile:mt-14 flex flex-col items-center justify-center`, children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-6 items-center`, children: [
    /* @__PURE__ */ jsx(SvgCanvasLogo, { className: "text-zinc-750  mobile:w-2/3" }),
    /* @__PURE__ */ jsx("span", { className: `text-zinc-750 typo-base font-medium`, children: "© 2024–present" })
  ] }) });
};
const SvgReactLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 22, viewBox: "0 0 24 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_31_34872)" }, /* @__PURE__ */ React.createElement("path", { d: "M12.0004 12.988C13.1088 12.988 14.0073 12.0895 14.0073 10.9811C14.0073 9.87264 13.1088 8.97409 12.0004 8.97409C10.892 8.97409 9.99341 9.87264 9.99341 10.9811C9.99341 12.0895 10.892 12.988 12.0004 12.988Z", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M12.0003 6.9008C14.6944 6.9008 17.1975 7.28747 19.0844 7.93678C21.358 8.71941 22.7561 9.90594 22.7561 10.9804C22.7561 12.0999 21.2744 13.3608 18.833 14.1692C16.9872 14.7808 14.5578 15.1004 12.0003 15.1004C9.37787 15.1004 6.89536 14.8007 5.02834 14.1626C2.66655 13.3555 1.2439 12.0787 1.2439 10.9804C1.2439 9.91456 2.579 8.73731 4.82075 7.95602C6.71496 7.29609 9.27971 6.9008 12.0003 6.9008Z", stroke: "currentColor", strokeMiterlimit: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M8.44864 8.95286C9.79435 6.61892 11.3802 4.64379 12.8857 3.33389C14.6997 1.75538 16.4261 1.13724 17.3566 1.67381C18.3263 2.23292 18.6784 4.14636 18.1591 6.66601C17.7665 8.57084 16.83 10.8345 15.5519 13.0504C14.242 15.322 12.7418 17.323 11.2568 18.6216C9.37784 20.2644 7.56056 20.8587 6.60947 20.3102C5.68624 19.7776 5.3334 18.0333 5.77578 15.7007C6.14985 13.7282 7.08899 11.3094 8.44864 8.95286Z", stroke: "currentColor", strokeMiterlimit: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M8.45206 13.055C7.10237 10.7231 6.18311 8.36325 5.79976 6.4047C5.33815 4.04489 5.66446 2.24022 6.59432 1.70233C7.56332 1.14123 9.39651 1.79186 11.3199 3.49971C12.7744 4.79104 14.2673 6.733 15.5487 8.9469C16.8626 11.2165 17.8475 13.5153 18.2302 15.45C18.715 17.8986 18.3224 19.7696 17.372 20.3195C16.4494 20.8534 14.7621 20.2883 12.9621 18.7396C11.4419 17.4311 9.81502 15.4095 8.45206 13.055Z", stroke: "currentColor", strokeMiterlimit: 10 })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_31_34872" }, /* @__PURE__ */ React.createElement("rect", { width: 24, height: 22, fill: "currentColor" }))));
const HeaderBgUrl = "/assets/hero-bg-CA8UqazQ.svg";
const SvgOpenhandRose = (props) => /* @__PURE__ */ React.createElement("svg", { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_24_14492)" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.11145 16.8067C8.91545 16.0567 8.71946 15.1127 8.29946 13.7027C7.96546 12.5887 7.61546 11.9847 7.35946 11.2367C7.04946 10.3267 6.75346 9.7947 6.36746 8.8747C6.08946 8.2167 5.63946 6.7787 5.45346 5.9947C5.21546 4.9767 5.51946 4.1467 5.94146 3.5827C6.44746 2.9047 7.86546 2.6027 8.65546 2.8807C9.39746 3.1407 10.1435 3.9047 10.4875 4.4567C11.0635 5.3767 11.2015 5.7207 11.9215 7.5407C12.7075 9.5247 13.0495 11.3767 13.1435 12.0027L13.3135 12.9067C13.3115 12.8267 13.2275 10.6627 13.2255 10.5827C13.1555 8.5247 13.1055 6.9367 13.1495 4.7047C13.1535 4.4527 13.2775 3.5307 13.3175 3.2747C13.4735 2.2747 13.9275 1.6747 14.6635 1.3167C15.4875 0.914701 16.5155 0.886701 17.4655 1.2827C18.3115 1.6287 18.7175 2.3827 18.8395 3.3267C18.8675 3.5447 19.0275 5.3007 19.0255 5.5407C18.9995 7.5907 19.0375 8.8227 19.0555 9.8887C19.0635 10.3507 19.0615 13.1387 19.0895 12.8267C19.2115 11.5147 19.2775 6.4487 19.7775 4.9427C20.0655 4.0767 20.5875 3.4507 21.3655 3.0847C22.2275 2.6787 23.5915 2.9447 24.1735 3.5707C24.7435 4.1807 25.0655 4.9547 25.1375 5.8767C25.2015 6.6867 25.0995 7.6707 25.0975 8.3667C25.0975 10.1007 25.0555 11.0147 25.0235 12.6087C25.0215 12.6847 24.9935 13.2047 25.0695 12.9727C25.2575 12.4127 25.4455 11.8887 25.6015 11.4827C25.6995 11.2327 26.0835 10.2547 26.3195 9.7647C26.5475 9.2967 26.7415 9.0267 27.1495 8.3887C27.5495 7.7627 27.9795 7.4927 28.4855 7.2667C29.5655 6.7967 30.7035 7.4907 31.0875 8.4487C31.2595 8.8787 31.1055 9.8747 31.0315 10.6587C30.9095 11.9527 30.5235 13.2707 30.3275 13.9547C30.0715 14.8487 29.7795 16.4247 29.6475 17.1567C29.5035 17.9447 29.1795 19.9207 28.9295 20.7967C28.7575 21.3987 28.1875 22.7527 27.6255 23.5647C27.6255 23.5647 25.4775 26.0647 25.2415 27.1887C25.0075 28.3147 25.0855 28.3227 25.0395 29.1187C24.9915 29.9167 25.2815 30.9647 25.2815 30.9647C25.2815 30.9647 23.6775 31.1727 22.8135 31.0327C22.0315 30.9087 21.0635 29.3507 20.8135 28.8767C20.4695 28.2207 19.7355 28.3467 19.4495 28.8307C18.9995 29.5967 18.0315 30.9707 17.3475 31.0567C16.0115 31.2247 13.2395 31.1167 11.0695 31.0967C11.0695 31.0967 11.4395 29.0747 10.6155 28.3807C10.0055 27.8607 8.95546 26.8127 8.32746 26.2607L6.66346 24.4187C6.09546 23.6987 5.40546 22.2327 4.17746 20.4487C3.48146 19.4407 2.12346 18.2787 1.60946 17.2907C1.16346 16.4407 0.947456 15.3827 1.22946 14.6407C1.67946 13.4527 2.57946 12.8467 3.95346 12.9767C4.99146 13.0767 5.64946 13.3887 6.42946 14.0507C6.87946 14.4307 7.57546 15.1187 7.92946 15.5467C8.25546 15.9367 8.33546 16.0987 8.68346 16.5647C9.14346 17.1787 9.28745 17.4827 9.11145 16.8067Z", fill: "white" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.11145 16.8067C8.91545 16.0567 8.71946 15.1127 8.29946 13.7027C7.96546 12.5887 7.61546 11.9847 7.35946 11.2367C7.04946 10.3267 6.75346 9.7947 6.36746 8.8747C6.08946 8.2167 5.63946 6.7787 5.45346 5.9947C5.21546 4.9767 5.51946 4.1467 5.94146 3.5827C6.44746 2.9047 7.86546 2.6027 8.65546 2.8807C9.39746 3.1407 10.1435 3.9047 10.4875 4.4567C11.0635 5.3767 11.2015 5.7207 11.9215 7.5407C12.7075 9.5247 13.0495 11.3767 13.1435 12.0027L13.3135 12.9067C13.3115 12.8267 13.2275 10.6627 13.2255 10.5827C13.1555 8.5247 13.1055 6.9367 13.1495 4.7047C13.1535 4.4527 13.2775 3.5307 13.3175 3.2747C13.4735 2.2747 13.9275 1.6747 14.6635 1.3167C15.4875 0.914701 16.5155 0.886701 17.4655 1.2827C18.3115 1.6287 18.7175 2.3827 18.8395 3.3267C18.8675 3.5447 19.0275 5.3007 19.0255 5.5407C18.9995 7.5907 19.0375 8.8227 19.0555 9.8887C19.0635 10.3507 19.0615 13.1387 19.0895 12.8267C19.2115 11.5147 19.2775 6.4487 19.7775 4.9427C20.0655 4.0767 20.5875 3.4507 21.3655 3.0847C22.2275 2.6787 23.5915 2.9447 24.1735 3.5707C24.7435 4.1807 25.0655 4.9547 25.1375 5.8767C25.2015 6.6867 25.0995 7.6707 25.0975 8.3667C25.0975 10.1007 25.0555 11.0147 25.0235 12.6087C25.0215 12.6847 24.9935 13.2047 25.0695 12.9727C25.2575 12.4127 25.4455 11.8887 25.6015 11.4827C25.6995 11.2327 26.0835 10.2547 26.3195 9.7647C26.5475 9.2967 26.7415 9.0267 27.1495 8.3887C27.5495 7.7627 27.9795 7.4927 28.4855 7.2667C29.5655 6.7967 30.7035 7.4907 31.0875 8.4487C31.2595 8.8787 31.1055 9.8747 31.0315 10.6587C30.9095 11.9527 30.5235 13.2707 30.3275 13.9547C30.0715 14.8487 29.7795 16.4247 29.6475 17.1567C29.5035 17.9447 29.1795 19.9207 28.9295 20.7967C28.7575 21.3987 28.1875 22.7527 27.6255 23.5647C27.6255 23.5647 25.4775 26.0647 25.2415 27.1887C25.0075 28.3147 25.0855 28.3227 25.0395 29.1187C24.9915 29.9167 25.2815 30.9647 25.2815 30.9647C25.2815 30.9647 23.6775 31.1727 22.8135 31.0327C22.0315 30.9087 21.0635 29.3507 20.8135 28.8767C20.4695 28.2207 19.7355 28.3467 19.4495 28.8307C18.9995 29.5967 18.0315 30.9707 17.3475 31.0567C16.0115 31.2247 13.2395 31.1167 11.0695 31.0967C11.0695 31.0967 11.4395 29.0747 10.6155 28.3807C10.0055 27.8607 8.95546 26.8127 8.32746 26.2607L6.66346 24.4187C6.09546 23.6987 5.40546 22.2327 4.17746 20.4487C3.48146 19.4407 2.12346 18.2787 1.60946 17.2907C1.16346 16.4407 0.947456 15.3827 1.22946 14.6407C1.67946 13.4527 2.57946 12.8467 3.95346 12.9767C4.99146 13.0767 5.64946 13.3887 6.42946 14.0507C6.87946 14.4307 7.57546 15.1187 7.92946 15.5467C8.25546 15.9367 8.33546 16.0987 8.68346 16.5647C9.14346 17.1787 9.28745 17.4827 9.11145 16.8067Z", fill: "url(#paint0_radial_24_14492)", stroke: "#242429", strokeWidth: 1.4 }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.1328 25.1271V18.2091V25.1271Z", fill: "#242429" }), /* @__PURE__ */ React.createElement("path", { d: "M23.1328 25.1271V18.2091", stroke: "#242429", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.1016 25.1505L19.0696 18.2045L19.1016 25.1505Z", fill: "#242429" }), /* @__PURE__ */ React.createElement("path", { d: "M19.1016 25.1505L19.0696 18.2045", stroke: "#242429", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.1094 18.2677L15.1514 25.1197L15.1094 18.2677Z", fill: "#242429" }), /* @__PURE__ */ React.createElement("path", { d: "M15.1094 18.2677L15.1514 25.1197", stroke: "#242429", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("radialGradient", { id: "paint0_radial_24_14492", cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", gradientTransform: "translate(4.44312 6.02488) rotate(41.5051) scale(18.9565 18.9632)" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FDA4AF" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#FB7185" })), /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_24_14492" }, /* @__PURE__ */ React.createElement("rect", { width: 32, height: 32, fill: "white" }))));
const SvgResizeeastwestBlue = (props) => /* @__PURE__ */ React.createElement("svg", { width: 32, height: 24, viewBox: "0 0 32 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_24_14502)" }, /* @__PURE__ */ React.createElement("path", { d: "M0 11.9814V11.9914L11.994 23.9834L11.996 15.9854H15.994H20.034V23.9854L31.994 11.9834L20.034 -0.0146016L20.036 8.0234L15.994 8.0274H11.994L11.996 -0.0166016L0 11.9814Z", fill: "#A5B4FC" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_24_14502" }, /* @__PURE__ */ React.createElement("rect", { width: 32, height: 24, fill: "white" }))));
const Header = () => {
  const gradBorder = `after:content-[' '] after:absolute after:-m-[1px] after:z-[-1] after:top-0 after:bottom-0 after:right-0 after:left-0 after:rounded-[inherit] bg-clip-padding border border-[transparent]`;
  const mobileRing = `mobile:border-zinc-600`;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-grow", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-grow-0 flex-shrink-0 px-[96px] box-content pt-[256px] w-[960px] mobile:w-full mobile:px-0 mobile:pt-6 gap-[31px] mobile:gap-5", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `bg-auto mobile:bg-[length:960px_682px] bg-no-repeat bg-center w-[1440px] h-[1024px] mobile:w-full mobile:h-[682px] max-w-none absolute top-0 left-[50%] translate-x-[-50%] -z-[1] pointer-events-none`,
        style: { backgroundImage: `url('${HeaderBgUrl}')` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `flex flex-row mobile:overflow-hidden flex-grow flex-shrink-0 justify-center items-center mobile:justify-start h-[33px] rounded-full bg-zinc-800 
				relative ${gradBorder} after:bg-[linear-gradient(135deg,_#484861_0%,_#414147_80.55%,_#59434E_100%)]
				typo-base box-border font-medium -mr-1 mobile:after:content-none ${mobileRing}`, children: /* @__PURE__ */ jsxs("div", { className: `flex flex-row flex-shrink-0 running-string gap-2`, children: [
      /* @__PURE__ */ jsx("span", { children: "React-based" }),
      /* @__PURE__ */ jsx(SvgReactLogo, { className: "w-[24px] h-[22px] text-zinc-400" }),
      /* @__PURE__ */ jsx("span", { children: "open source design and development framework" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-row mobile:flex-col flex-grow gap-[30px]`, children: [
      /* @__PURE__ */ jsxs("div", { className: `flex flex-col 
					justify-center items-center flex-grow h-[192px] mobile:h-auto mobile:py-7 bg-zinc-800 box-content rounded-2xl 
					${gradBorder} after:bg-[linear-gradient(22deg,_#484861_0%,_theme(colors.zinc-600)_100%)]
					relative mobile:after:content-none ${mobileRing}`, children: [
        /* @__PURE__ */ jsx(SvgCanvasLogo, { className: "mobile:w-[80%]" }),
        /* @__PURE__ */ jsx("div", { "data-top-handle": true, className: "absolute bg-zinc-500 opacity-50 rounded-full -top-2 left-1/2 -translate-x-1/2 w-10 h-1" }),
        /* @__PURE__ */ jsx("div", { "data-bottom-handle": true, className: "absolute bg-zinc-500 opacity-50 rounded-full -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1" }),
        /* @__PURE__ */ jsx("div", { "data-left-handle": true, className: "absolute bg-zinc-500 opacity-50 rounded-full -left-2 top-1/2 -translate-y-1/2 h-10 w-1" }),
        /* @__PURE__ */ jsx("div", { "data-right-handle": true, className: "absolute bg-zinc-500 opacity-50 rounded-full -right-2 top-1/2 -translate-y-1/2 h-10 w-1" }),
        /* @__PURE__ */ jsx(SvgOpenhandRose, { className: "absolute -right-3 -bottom-3" }),
        /* @__PURE__ */ jsx(SvgResizeeastwestBlue, { className: "absolute -left-[22px] top-1/2 -translate-y-1/2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `flex flex-col justify-center 
					items-center w-[385px] mobile:w-full h-[192px] mobile:h-auto mobile:py-8 bg-zinc-800 box-content 
					${gradBorder} after:bg-[linear-gradient(22deg,_#59434E_0%,_#4b4b52_100%);] m-[-1px]
					rounded-2xl relative mobile:after:content-none ${mobileRing}`, children: /* @__PURE__ */ jsx("span", { className: "typo-h-base px-1 text-center text-zinc-100", children: "Transform large clunky linear forms into adjustable and self-explanatory experience" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row mobile:flex-col self-end w-[384px] mobile:w-full gap-4", children: [
      /* @__PURE__ */ jsxs("a", { href: "https://github.com/jpetroff/canvas-ui-demo", target: "_blank", className: "flex flex-row items-center bg-zinc-800 ring-zinc-600 ring-opacity-70 ring-1 box-border rounded-2xl pl-1.5 pr-5 h-8 gap-3 hover:ring-zinc-300 transition-all text-zinc-300 hover:text-zinc-250", children: [
        /* @__PURE__ */ jsx(SvgGithubLogo, {}),
        /* @__PURE__ */ jsx("span", { className: "typo-base text-zinc-50 font-medium mobile:flex-grow mobile:text-center mobile:-ml-4", children: "Demo repo" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row flex-grow items-center justify-center px-4 bg-zinc-800 ring-zinc-600 ring-opacity-90 ring-1 box-border rounded-2xl h-8", children: /* @__PURE__ */ jsx("span", { className: "typo-base text-zinc-300 font-medium", children: "More links coming soon!" }) })
    ] })
  ] }) });
};
const SvgDevFullChip = (props) => /* @__PURE__ */ React.createElement("svg", { width: 42, height: 42, viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M3 12C3 9.79086 4.79086 8 7 8H33C35.2091 8 37 9.79086 37 12V15.8394C37 17.5849 35.5849 19 33.8394 19C33.2893 19 32.7488 18.8565 32.2712 18.5836L31.9846 18.4197C29.3179 16.896 26 18.8214 26 21.8927V22.9338C26 25.8055 28.9362 27.7416 31.5757 26.6104L32.3739 26.2683C32.787 26.0913 33.2318 26 33.6812 26C35.5141 26 37 27.4859 37 29.3188V32C37 34.2091 35.2091 36 33 36H7C4.79086 36 3 34.2091 3 32V12Z", fill: "url(#paint0_linear_41_5030)" }), /* @__PURE__ */ React.createElement("g", { filter: "url(#filter0_d_41_5030)" }, /* @__PURE__ */ React.createElement("path", { d: "M16.7408 28.4835V27.1617H17.3883C17.7659 27.1617 18.0626 27.0718 18.2784 26.892C18.4942 26.7122 18.5797 26.4514 18.5347 26.1097L18.238 23.9517C18.166 23.4751 18.2604 23.0705 18.5212 22.7378C18.791 22.3961 19.1596 22.1803 19.6272 22.0904C19.1596 22.0185 18.791 21.8296 18.5212 21.5239C18.2604 21.2182 18.166 20.8226 18.238 20.337L18.5347 18.179C18.5797 17.8373 18.4942 17.5765 18.2784 17.3967C18.0626 17.2169 17.7659 17.127 17.3883 17.127H16.7408V15.8052H17.5096C18.0402 15.8052 18.5032 15.8996 18.8989 16.0884C19.2945 16.2683 19.5912 16.529 19.789 16.8707C19.9869 17.2124 20.0543 17.6215 19.9914 18.0981L19.6946 20.2561C19.6317 20.6787 19.6901 20.9889 19.87 21.1867C20.0498 21.3845 20.387 21.4835 20.8815 21.4835H22.6214V22.8052H20.8815C20.387 22.8052 20.0498 22.9086 19.87 23.1155C19.6901 23.3133 19.6317 23.619 19.6946 24.0326L19.9914 26.1771C20.0543 26.6537 19.9869 27.0628 19.789 27.4045C19.5912 27.7552 19.2945 28.0204 18.8989 28.2003C18.5032 28.3891 18.0402 28.4835 17.5096 28.4835H16.7408Z", fill: "white" })), /* @__PURE__ */ React.createElement("g", { filter: "url(#filter1_d_41_5030)" }, /* @__PURE__ */ React.createElement("path", { d: "M12.4956 28.4835C11.6953 28.4835 11.0659 28.2767 10.6073 27.8631C10.1487 27.4495 9.95543 26.8875 10.0274 26.1771L10.2297 24.0326C10.2656 23.619 10.1982 23.3133 10.0274 23.1155C9.85652 22.9086 9.52832 22.8052 9.04276 22.8052H7.38379V21.4835H9.04276C9.52832 21.4835 9.85652 21.3845 10.0274 21.1867C10.1982 20.9889 10.2656 20.6787 10.2297 20.2561L10.0274 18.0981C9.95543 17.3877 10.1487 16.8302 10.6073 16.4256C11.0749 16.012 11.7043 15.8052 12.4956 15.8052H13.2644V17.127H12.617C12.2393 17.127 11.9471 17.2169 11.7403 17.3967C11.5335 17.5765 11.4481 17.8373 11.484 18.179L11.6863 20.337C11.7313 20.8316 11.6054 21.2362 11.3087 21.5509C11.0209 21.8566 10.5714 22.0454 9.95992 22.1174C10.5714 22.1893 11.0209 22.3916 11.3087 22.7243C11.6054 23.057 11.7313 23.4661 11.6863 23.9517L11.484 26.1097C11.4481 26.4514 11.5335 26.7122 11.7403 26.892C11.9471 27.0718 12.2393 27.1617 12.617 27.1617H13.2644V28.4835H12.4956Z", fill: "white" })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: "filter0_d_41_5030", x: 15.0913, y: 14.9804, width: 9.17977, height: 15.9776, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", { dy: 0.824789 }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 0.824789 }), /* @__PURE__ */ React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_41_5030" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_41_5030", result: "shape" })), /* @__PURE__ */ React.createElement("filter", { id: "filter1_d_41_5030", x: 5.73421, y: 14.9804, width: 9.17977, height: 15.9776, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", { dy: 0.824789 }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 0.824789 }), /* @__PURE__ */ React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_41_5030" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_41_5030", result: "shape" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "paint0_linear_41_5030", x1: 37, y1: 22, x2: 3, y2: 22, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#6366F1" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.9, stopColor: "#0D9488" }))));
const SvgDevOutlineChip = (props) => /* @__PURE__ */ React.createElement("svg", { width: 36, height: 30, viewBox: "0 0 36 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 5C0 2.23858 2.23858 0 5 0H31C33.7614 0 36 2.23858 36 5V8.83936C36 11.1372 34.1372 13 31.8394 13C31.1153 13 30.4038 12.811 29.7751 12.4518L29.4884 12.288C27.4884 11.1451 25 12.5893 25 14.8927V15.9338C25 18.0876 27.2022 19.5397 29.1818 18.6913L29.98 18.3492C30.5175 18.1188 31.0963 18 31.6812 18C34.0664 18 36 19.9336 36 22.3188V25C36 27.7614 33.7614 30 31 30H5C2.23858 30 0 27.7614 0 25V5ZM5 2C3.34315 2 2 3.34315 2 5V25C2 26.6569 3.34315 28 5 28H31C32.6569 28 34 26.6569 34 25V22.3188C34 21.0382 32.9618 20 31.6812 20C31.3672 20 31.0564 20.0638 30.7678 20.1875L29.9696 20.5296C26.6703 21.9436 23 19.5234 23 15.9338V14.8927C23 11.0536 27.1474 8.64677 30.4807 10.5515L30.7674 10.7153C31.0938 10.9019 31.4633 11 31.8394 11C33.0326 11 34 10.0326 34 8.83936V5C34 3.34315 32.6569 2 31 2H5Z", fill: "url(#paint0_linear_59_19907)" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "paint0_linear_59_19907", x1: 35, y1: 15, x2: 1, y2: 15, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#6366F1" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.9, stopColor: "#0D9488" }))));
const SvgDesignFullChip = (props) => /* @__PURE__ */ React.createElement("svg", { width: 42, height: 42, viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M3 22.9338V21.8927C3 18.8214 6.31793 16.896 8.98456 18.4197L9.27124 18.5836C9.7488 18.8565 10.2893 19 10.8394 19C12.5849 19 14 17.5849 14 15.8394V12C14 9.79086 15.7909 8 18 8H33C35.2091 8 37 9.79086 37 12V32C37 34.2091 35.2091 36 33 36H18C15.7909 36 14 34.2091 14 32V29.3188C14 27.4859 12.5141 26 10.6812 26C10.2318 26 9.78698 26.0913 9.37387 26.2683L8.57568 26.6104C5.9362 27.7416 3 25.8055 3 22.9338Z", fill: "url(#paint0_linear_41_5037)" }), /* @__PURE__ */ React.createElement("g", { filter: "url(#filter0_d_41_5037)" }, /* @__PURE__ */ React.createElement("path", { d: "M26.053 24.5186L26.6402 24.8998L26.053 24.5186L23.8056 27.9806L21.5219 17.0658L31.2704 22.6528L26.636 24.0785C26.3961 24.1523 26.1897 24.3081 26.053 24.5186Z", stroke: "white", strokeWidth: 1.4 })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: "filter0_d_41_5037", x: 19.1971, y: 15.303, width: 14.7478, height: 16.1201, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", { dy: 0.740483 }), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 0.740483 }), /* @__PURE__ */ React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_41_5037" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_41_5037", result: "shape" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "paint0_linear_41_5037", x1: 37, y1: 22, x2: 3, y2: 22, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0.1, stopColor: "#FB7185" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#6366F1" }))));
const SvgDesignOutlineChip = (props) => /* @__PURE__ */ React.createElement("svg", { width: 36, height: 30, viewBox: "0 0 36 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 2C14.3431 2 13 3.34315 13 5V8.83936C13 11.1372 11.1372 13 8.83936 13C8.11529 13 7.40376 12.811 6.7751 12.4518L6.48842 12.288C4.48845 11.1451 2 12.5893 2 14.8927V15.9338C2 18.0876 4.20215 19.5397 6.18176 18.6913L6.97995 18.3492C7.51754 18.1188 8.09633 18 8.68121 18C11.0664 18 13 19.9336 13 22.3188V25C13 26.6569 14.3431 28 16 28H31C32.6569 28 34 26.6569 34 25V5C34 3.34315 32.6569 2 31 2H16ZM11 5C11 2.23858 13.2386 0 16 0H31C33.7614 0 36 2.23858 36 5V25C36 27.7614 33.7614 30 31 30H16C13.2386 30 11 27.7614 11 25V22.3188C11 21.0382 9.96184 20 8.68121 20C8.36718 20 8.05643 20.0638 7.76779 20.1875L6.9696 20.5296C3.67026 21.9436 0 19.5234 0 15.9338V14.8927C0 11.0536 4.14741 8.64677 7.4807 10.5515L6.98456 11.4197L7.4807 10.5515L7.76738 10.7153C8.09384 10.9019 8.46334 11 8.83936 11C10.0326 11 11 10.0326 11 8.83936V5Z", fill: "url(#paint0_linear_59_19909)" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "paint0_linear_59_19909", x1: 35, y1: 15, x2: 1, y2: 15, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { stopColor: "#FB7185" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.705, stopColor: "#6366F1" }))));
const EndArrowUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASdSURBVHgBtZZLaCRFGMfr0V09yZiZCbtIJqBxPUSdw4KH9bZeBdlr9qSHnBRB3URDZkkgE7KZJBDNY0GYk5dFQQTB0yILouzBiwcRchHErJJRk0w2JD2P7q4q/1/3zLLvxDw+6Kme6uL7/b9HVTdnsPn5xde1dt4UwtxxHP312NjYv+yUjdPP3NzKNcbMi9ZayTmT1oofIeL7YnH0V3ZKFoNnZ5ffEMK+bS2XjFmH82TEo23G5JdXr37wHTth452bcvmTK4BcgAAAuWMMCWAuRDjIxBbmvsHc7YmJkSo7AbsHLpUq3UrVZxFpH4E7UMAURhdLFARAlL0ppVsZH39/gx3D+P1/FhcXz0aRUzbGZAnMmMBlFZapNlgJQWIMiflZa/PZ5ORHP7EjGH94olz+9CKA7yLlADEPU14bnMLlJv8tjegDRmXZgIiVYvHDr9hxwGRotrc4t5cQdQrwFMYupDyFaEkICVJJ9ydwrOVoTKSe38SaCkTcYUcBk83NLU0A9qoQIo0UpzGVRmQQYr125NT1tP0E+YEIjFZgDd1/YYxemJz8eP1/g6neQSCm4OccHPZiaQ+i6oZbD47dZM/zGJb4iZEUOfmEAIYl7DYycKNYvHLj0OA2fCAI5DJu+3GdoZSzpMmQYtrrcZQxNHFlBGkBMHEeC7GkaB0NeS0Mxbel0sjdA8Fk5fLyJThfhoMztL3aBwtLoA/EQMYSUDxBEbf9286adTz7ATczB4LJlpY+zzUae/2cmzRqlxHCySC6LNgD1pocnOVAGWgvfwHpzQKaa0fOO2QSlMzZX5zDgKNov9eYcC+X8/7x/VYAERrThq58Pm8HBwft5uZmJyw2NDRkpqenebPpZbPZVJbEGKoCNyQuJyU/ONUzM9fP4Y11FmXdw4ujLqVq+n4jQlPjqgGeN5mMbx3HMbVaDfACy+d3YhHVatUWCoX4fm1tLR6npqaoFlY8Dbq6uoq00luLYVeFLlLotlp1z3VpPwfK8551s9k6Rk+2Wi1kL+9kMn9JpZSsVlW7+Zi8dWsn5pRKJUPQTv4fa3R2e179NXQj7cuGUqKJsYW93dLahun0M1EUGR2GWqOT4VCa7u6WlbLP1Ovr1vczAFQjqhQBH/b/xBor5V/AgNMqBsZ7M4oE9m7kUI18f5+5roIozZWKdBCkhO87EPA7/qugUOgNLl9+Rz/J/2PB5fL1lxnTPYgokDgYESUPAi6oNFISXFiIQCNTNgw3pguwRkQiR0bGm510Ps0eqfH8/MrzqOdL1kYa9bUamYRDLqWhzRBHTZfnWZCN8Dwdct6zt7+/XxsdHW0cBvpIxJVKpXt3t3E+CJhBZOSADkALMCLE54mkUzJChAgZ9e7ry20NDw832RHMuQ/q7uw0LhpD5yzX1FN09uMWT6lHOMPhYcMw3E6n9S4+CH12DLsHrtWa5/Fi7yaKEJKAMZhOGmOkdl2x0WjU/kaHRuwELAYvLCy9gkhRW0HhARZaOuwxd9d1vY16fXPrpIAPgNFj/WgU1BKbQ3OcQmLbmNRvExPv7bBTshiMrfKH47Dn8Cm10dUV/EndyU7Z/gN7HEYt7jayogAAAABJRU5ErkJggg==";
const Badge = ({ children, className }) => {
  return /* @__PURE__ */ jsx("div", { className: `${className || ""} px-1.5 pt-px text-[0.625rem] leading-4 font-medium tracking-wider text-zinc-50 rounded inline-block`, children });
};
const RoadmapChip = ({ type, className }) => {
  switch (type) {
    case "design":
    default:
      return /* @__PURE__ */ jsx("div", { className: `absolute -left-[13px] bg-zinc-800 ring-4 ring-zinc-800 ${className || ""} mobile:-top-1.5 mobile:left-3 mobile:bottom-auto`, children: /* @__PURE__ */ jsx(SvgDesignOutlineChip, {}) });
    case "dev":
      return /* @__PURE__ */ jsx("div", { className: `absolute bg-zinc-800 ring-4 ring-zinc-800 ${className || ""} mobile:-top-1.5 mobile:left-4 mobile:bottom-auto`, children: /* @__PURE__ */ jsx(SvgDevOutlineChip, {}) });
    case "both":
      return /* @__PURE__ */ jsxs("div", { className: `absolute bg-zinc-800 ring-4 ring-zinc-800 flex flex-row ${className || ""} mobile:-top-1.5 mobile:left-0 mobile:bottom-auto`, children: [
        /* @__PURE__ */ jsx(SvgDevOutlineChip, {}),
        /* @__PURE__ */ jsx(SvgDesignOutlineChip, { className: "-ml-[13px]" })
      ] });
  }
};
const Roadmap = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col items-center mt-[192px] mobile:mt-20`, children: [
      /* @__PURE__ */ jsxs("span", { className: `flex gap-2 flex-row mobile:flex-wrap mobile:items-center mobile:gap-0 items-baseline text-h-base mobile:text-h-base-mobile mobile:leading-8 leading-[2.625rem] text-zinc-250 font-light`, children: [
        /* @__PURE__ */ jsx(SvgCanvasLogo, { className: "text-zinc-50 -mt-px mobile:py-2 mobile:box-content mobile:h-4 mobile:w-[117px] h-[19px] w-[140px]" }),
        " aims to provide both"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: `flex gap-1 flex-row mobile:flex-wrap mobile:gap-0 items-center mobile:justify-center text-h-base mobile:text-h-base-mobile mobile:leading-8 leading-[2.625rem] text-zinc-250 font-light`, children: [
        /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-2 mobile:gap-0.5`, children: [
          /* @__PURE__ */ jsx(SvgDevFullChip, { className: "mobile:h-8" }),
          /* @__PURE__ */ jsx("span", { className: `font-medium text-zinc-50`, children: "developer components" })
        ] }),
        " and ",
        /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-2 mobile:gap-0.5`, children: [
          /* @__PURE__ */ jsx(SvgDesignFullChip, { className: "mobile:h-8" }),
          /* @__PURE__ */ jsx("span", { className: `font-medium text-zinc-50`, children: "design documentation" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: `flex gap-2 flex-row items-center text-h-base mobile:text-h-base-mobile mobile:leading-8 leading-[2.625rem] text-zinc-250 font-light mobile:text-center`, children: "to better fit your design and development processes" })
    ] }),
    /* @__PURE__ */ jsxs("h3", { className: `flex flex-row flex-grow gap-4 items-center w-[960px] mobile:w-full mt-[194px] mobile:mt-20`, children: [
      /* @__PURE__ */ jsx("i", { className: "flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-800)_0%,_theme(colors.zinc-500)_100%)]" }),
      /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-50`, children: "Roadmap" }),
      /* @__PURE__ */ jsx("b", { className: "flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-500)_0%,_theme(colors.zinc-800)_100%)]" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-zinc-250 typo-base mt-4 font-medium", children: "Check here how you can contribute to the project and when to expect beta test" }),
    /* @__PURE__ */ jsxs("div", { className: `w-[960px] mobile:w-full mobile:relative grid grid-flow-row gap-0 grid-cols-8 mobile:grid-cols-1 mt-20 mobile:mt-12`, children: [
      /* @__PURE__ */ jsxs("div", { className: `relative col-span-2 self-end col-start-1 mobile:col-start-1 mobile:row-start-1 mobile:pl-20 mobile:mb-16`, children: [
        /* @__PURE__ */ jsx("div", { className: `flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `, children: /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-800", children: "DONE" }) }),
        /* @__PURE__ */ jsx("p", { className: `typo-base text-zinc-50 mt-2`, children: "Prototype and demo stand with examples" }),
        /* @__PURE__ */ jsx(RoadmapChip, { type: "both", className: "-bottom-[45px]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `relative col-span-2 self-end col-start-5 mobile:col-start-1 mobile:row-start-3 mobile:pl-20 mobile:mb-16`, children: [
        /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `, children: [
          /* @__PURE__ */ jsx(Badge, { className: "bg-sky-700 ", children: "TODO" }),
          /* @__PURE__ */ jsx(Badge, { className: "bg-[linear-gradient(144deg,_#4338ca_0%,_#d97706_100%)]", children: "ßETA" }),
          "development"
        ] }),
        /* @__PURE__ */ jsx("p", { className: `typo-base text-zinc-50 mt-2`, children: "Testing coverage, code refactoring for production" }),
        /* @__PURE__ */ jsx(RoadmapChip, { type: "dev", className: "-bottom-[45px]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `relative col-span-2 self-start col-start-3 row-start-3 mobile:col-start-1 mobile:row-start-2 mobile:pl-20 mobile:mb-16`, children: [
        /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `, children: [
          /* @__PURE__ */ jsx(Badge, { className: "bg-sky-700", children: "TODO" }),
          "design"
        ] }),
        /* @__PURE__ */ jsx("p", { className: `typo-base text-zinc-50 mt-2`, children: "Collecting design use cases, prototype tests" }),
        /* @__PURE__ */ jsx(RoadmapChip, { type: "design", className: "-top-[49px]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `relative col-span-2 self-start col-start-7 row-start-3 mobile:col-start-1 mobile:row-start-4 mobile:pl-20 mobile:mb-16`, children: [
        /* @__PURE__ */ jsxs("div", { className: `flex flex-row gap-2 items-center typo-sm tracking-wide text-zinc-250 `, children: [
          /* @__PURE__ */ jsx(Badge, { className: "bg-sky-700", children: "TODO" }),
          "design"
        ] }),
        /* @__PURE__ */ jsx("p", { className: `typo-base text-zinc-50 mt-2`, children: "Early adopters testing and design refinement" }),
        /* @__PURE__ */ jsx(RoadmapChip, { type: "design", className: "-top-[49px]" })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `
					row-start-2 col-span-full h-[29px] items-center flex flex-row pt-4 pb-5 flex-shrink-0 box-content 
					relative z-[-1] mobile:absolute mobile:top-0 mobile:bottom-0 mobile:left-[34px] mobile:w-1 mobile:h-auto
					mobile:items-start mobile:p-0 mobile:col-span-1 mobile:row-auto
				`,
          children: [
            /* @__PURE__ */ jsx("i", { className: `h-px bg-zinc-500 w-full block mobile:h-full mobile:w-px mobile:bg-[linear-gradient(0deg,_theme(colors.zinc-500/0)_0%,_theme(colors.zinc-500/1)_32px,_theme(colors.zinc-500/1)_100%)] mobile:bg-zinc-800` }),
            /* @__PURE__ */ jsx("img", { src: `${EndArrowUri}`, alt: "end arrow", width: "15", height: "13", className: "absolute right-0 mobile:hidden" })
          ]
        }
      )
    ] })
  ] });
};
const LLMVideoUri = "/assets/canvas-ui-llm-RDBjLBDO.mp4";
const ChatVideoUri = "/assets/canvas-ui-chat-BH3440GT.mp4";
const AutoVideoUri = "/assets/canvas-ui-automation-CH1Swyh-.mp4";
const LLMVideoThumb = "/assets/canvas-ui-llm-thumb-CdRi1jDs.jpg";
const ChatVideoThumb = "/assets/canvas-ui-chat-thumb-FZhIqVv2.jpg";
const AutoVideoThumb = "/assets/canvas-ui-automation-thumb-B8hMOnU1.jpg";
const SvgPlayCircle = (props) => /* @__PURE__ */ React.createElement("svg", { width: 97, height: 97, viewBox: "0 0 97 97", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { clipPath: "url(#clip0_82_32507)" }, /* @__PURE__ */ React.createElement("mask", { id: "mask0_82_32507", style: {
  maskType: "alpha"
}, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 97, height: 97 }, /* @__PURE__ */ React.createElement("rect", { x: 0.322021, y: 0.595825, width: 96, height: 96, fill: "#D9D9D9" })), /* @__PURE__ */ React.createElement("g", { mask: "url(#mask0_82_32507)" }, /* @__PURE__ */ React.createElement("g", { filter: "url(#filter0_d_82_32507)" }, /* @__PURE__ */ React.createElement("path", { d: "M44.222 59.4958L58.522 50.2958C59.122 49.9091 59.422 49.3458 59.422 48.6058C59.422 47.8658 59.122 47.2958 58.522 46.8958L44.222 37.6958C43.4886 37.2291 42.772 37.1978 42.072 37.6018C41.372 38.0051 41.022 38.6031 41.022 39.3958V57.7958C41.022 58.5884 41.372 59.1864 42.072 59.5898C42.772 59.9938 43.4886 59.9624 44.222 59.4958ZM48.339 83.3958C43.5276 83.3958 39.02 82.4828 34.816 80.6568C30.612 78.8308 26.9263 76.3358 23.759 73.1718C20.591 70.0078 18.093 66.3268 16.265 62.1288C14.4363 57.9301 13.522 53.4248 13.522 48.6128C13.522 43.8014 14.435 39.2771 16.261 35.0398C18.087 30.8024 20.582 27.1168 23.746 23.9828C26.91 20.8481 30.591 18.3668 34.789 16.5388C38.9876 14.7101 43.493 13.7958 48.305 13.7958C53.1163 13.7958 57.6406 14.7088 61.878 16.5348C66.1153 18.3608 69.801 20.8391 72.935 23.9698C76.0696 27.1004 78.551 30.7814 80.379 35.0128C82.2076 39.2448 83.122 43.7668 83.122 48.5788C83.122 53.3901 82.209 57.8978 80.383 62.1018C78.557 66.3058 76.0786 69.9914 72.948 73.1588C69.8173 76.3268 66.1363 78.8248 61.905 80.6528C57.673 82.4814 53.151 83.3958 48.339 83.3958ZM48.322 81.1958C57.3886 81.1958 65.0886 78.0291 71.422 71.6958C77.7553 65.3624 80.922 57.6624 80.922 48.5958C80.922 39.5291 77.7553 31.8291 71.422 25.4958C65.0886 19.1624 57.3886 15.9958 48.322 15.9958C39.2553 15.9958 31.5553 19.1624 25.222 25.4958C18.8886 31.8291 15.722 39.5291 15.722 48.5958C15.722 57.6624 18.8886 65.3624 25.222 71.6958C31.5553 78.0291 39.2553 81.1958 48.322 81.1958Z", fill: "currentColor" })))), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: "filter0_d_82_32507", x: 5.52197, y: 5.79578, width: 85.6001, height: 85.6, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 4 }), /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_82_32507" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_82_32507", result: "shape" })), /* @__PURE__ */ React.createElement("clipPath", { id: "clip0_82_32507" }, /* @__PURE__ */ React.createElement("rect", { width: 96, height: 96, fill: "white", transform: "translate(0.322021 0.595825)" }))));
const VideoThumbnail = ({ className, image, children, onClick }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${className || ""} relative w-full flex flex-row justify-center items-center aspect-video bg-zinc-900 rounded-lg cursor-pointer text-indigo-50/82 hover:text-indigo-50/[0.96]`,
      onClick,
      children: [
        /* @__PURE__ */ jsx("div", { className: `w-full aspect-video rounded-lg overflow-hidden hover:scale-[1.01] absolute top-0 left-0 bg-zinc-900 transition-transform z-0`, children: /* @__PURE__ */ jsx("img", { src: image, className: "w-full aspect-video opacity-45 hover:opacity-80 transition-opacity" }) }),
        /* @__PURE__ */ jsx(SvgPlayCircle, { className: `w-24 h-24 z-10 relative pointer-events-none transition-colors` }),
        children
      ]
    }
  );
};
const Video = () => {
  const [tab, setTab] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false);
  const videoTag = React.useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: `w-[960px] mobile:w-full mt-[188px] mobile:mt-20 items-center flex flex-col gap-10`, children: [
    /* @__PURE__ */ jsx("style", { children: `[data-selected]{box-shadow: inset 0 0 12px 0 rgba(114,114,122,0.12);background-image: radial-gradient(49% 125% at 12% 0%, rgb(65, 65, 71) 10%, rgb(55, 55, 61) 100%);}` }),
    /* @__PURE__ */ jsxs("h3", { className: `flex flex-row gap-4 items-center w-full`, children: [
      /* @__PURE__ */ jsx("i", { className: "flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-800)_0%,_theme(colors.zinc-500)_100%)]" }),
      /* @__PURE__ */ jsx("span", { className: `typo-h-base text-zinc-100`, children: "Example demos" }),
      /* @__PURE__ */ jsx("b", { className: "flex-grow h-px block bg-[linear-gradient(90deg,_theme(colors.zinc-500)_0%,_theme(colors.zinc-800)_100%)]" })
    ] }),
    /* @__PURE__ */ jsx(Scroller, { children: /* @__PURE__ */ jsxs("div", { "data-section-radio": true, className: `flex flex-row gap-4 mobile:gap-2 justify-center mobile:justify-normal mobile:w-auto mobile:pb-6`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "data-selected": tab == 0 ? "" : void 0,
          className: `flex flex-shrink-0 typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50 mobile:hover:text-zinc-250`,
          onClick: () => setTab(0),
          children: "AI tools"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "data-selected": tab == 1 ? "" : void 0,
          className: `flex flex-shrink-0 typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50 mobile:hover:text-zinc-250`,
          onClick: () => setTab(1),
          children: "Conversational flows"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "data-selected": tab == 2 ? "" : void 0,
          className: `flex flex-shrink-0 typo-base font-medium items-center justify-center border border-[rgba(232,_232,_237,_0.08)] h-9 w-44 rounded-full bg-zinc-750 bg-opacity-50 text-zinc-250 data-[selected]:text-zinc-50 data-[selected]:bg-opacity-100 cursor-pointer data-[selected]:cursor-default hover:text-zinc-50 mobile:hover:text-zinc-250`,
          onClick: () => setTab(2),
          children: "Automation scenarios"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: `w-full max-w-3xl aspect-video rounded-lg shadow-2xl shadow-zinc-950/80 bg-[#13121B] cursor-pointer transition-colors`, children: [
      /* @__PURE__ */ jsx(VideoThumbnail, { image: LLMVideoThumb, onClick: () => setOpenDialog(true), className: `${tab == 0 ? "" : "hidden"}` }),
      /* @__PURE__ */ jsx(VideoThumbnail, { image: ChatVideoThumb, onClick: () => setOpenDialog(true), className: `${tab == 1 ? "" : "hidden"}` }),
      /* @__PURE__ */ jsx(VideoThumbnail, { image: AutoVideoThumb, onClick: () => setOpenDialog(true), className: `${tab == 2 ? "" : "hidden"}` })
    ] }),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: openDialog,
        onClose: () => {
          setOpenDialog(false);
          videoTag.current && videoTag.current.pause();
        },
        className: "dialog bg-transparent w-auto p-0 aspect-video outline-none",
        children: [
          tab == 0 && /* @__PURE__ */ jsx("video", { ref: videoTag, className: "w-full aspect-video outline-none", controls: true, autoPlay: true, children: /* @__PURE__ */ jsx("source", { src: LLMVideoUri, type: "video/mp4" }) }),
          tab == 1 && /* @__PURE__ */ jsx("video", { ref: videoTag, className: "w-full aspect-video outline-none", controls: true, autoPlay: true, children: /* @__PURE__ */ jsx("source", { src: ChatVideoUri, type: "video/mp4" }) }),
          tab == 2 && /* @__PURE__ */ jsx("video", { ref: videoTag, className: "w-full aspect-video outline-none", controls: true, autoPlay: true, children: /* @__PURE__ */ jsx("source", { src: AutoVideoUri, type: "video/mp4" }) })
        ]
      }
    )
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxs("div", { suppressHydrationWarning: true, className: "flex flex-col w-[1152px] mobile:w-full mobile:px-6 items-center overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(FeatureImage, {}),
    /* @__PURE__ */ jsx(FeaturesBlock, {}),
    /* @__PURE__ */ jsx(Video, {}),
    /* @__PURE__ */ jsx(Roadmap, {}),
    /* @__PURE__ */ jsx(Contacts, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    false
  ] });
};
function render() {
  const html = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(App, {}));
  return { html };
}
export {
  render
};
