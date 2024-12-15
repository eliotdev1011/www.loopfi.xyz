(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    99557: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 64404)),
        Promise.resolve().then(r.bind(r, 27640)),
        Promise.resolve().then(r.bind(r, 90239)),
        Promise.resolve().then(r.t.bind(r, 84080, 23)),
        Promise.resolve().then(r.t.bind(r, 91541, 23)),
        Promise.resolve().then(r.t.bind(r, 58488, 23)),
        Promise.resolve().then(r.bind(r, 93999)),
        Promise.resolve().then(r.t.bind(r, 44193, 23)),
        Promise.resolve().then(r.bind(r, 78119)),
        Promise.resolve().then(r.bind(r, 47583)),
        Promise.resolve().then(r.bind(r, 40144)),
        Promise.resolve().then(r.t.bind(r, 53054, 23)),
        Promise.resolve().then(r.bind(r, 57046));
    },
    85020: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return o;
        },
      });
      let o = {
        LAUNCH_APP_URL: "https://app-cyclicai-xyz.vercel.app/",
        BETA_TESTING_URL: "https://beta.loopfi.xyz/",
        HEADER_URL: "https://app.galxe.com/quest/Loop",
        PAGES: {
          DOCS: "https://docs.loopfi.xyz/",
          BLOG: "/blog",
          TERMS: "/terms",
          PRIVACY: "/privacy-policy",
        },
        WP_URLS: { POSTS: "/posts?_embed&status=publish" },
        SHARER: {
          X: (e, t) => "https://x.com/intent/tweet?url=".concat(e),
          FB: (e) => "https://www.facebook.com/sharer/sharer.php?u=".concat(e),
          DISCORD: (e) => "https://discord.com/channels/@me",
          LINKEDIN: (e) =>
            "https://www.linkedin.com/sharing/share-offsite/?url=".concat(e),
          TELEGRAM: (e, t) => "https://t.me/share/url?url=".concat(e),
        },
        SOCIALS: {
          DISCORD: "https://discord.com/invite/mVqf2Q5Whg",
          TELEGRAM: "https://t.me/",
          X: "https://twitter.com/",
          MIRROR: "https://mirror.xyz/loopfixyz.eth",
        },
      };
    },
    78119: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return g;
        },
      });
      var o = r(57437),
        l = r(60019),
        s = r(49582),
        n = r(87520),
        i = r(2265),
        a = r(47722),
        c = r(85020),
        d = r(66648),
        u = r(87138),
        m = r(27269),
        h = r(76287),
        f = r.n(h),
        p = function (e) {
          let { className: t = "" } = e,
            r = [
              { icon: "telegram", url: c.g.SOCIALS.TELEGRAM },
              { icon: "x", url: c.g.SOCIALS.X },
            ];
          return (0, o.jsx)("div", {
            className: "social-icons flex items-center gap-4 ".concat(t),
            children: (0, o.jsx)(m.l, {
              of: r,
              render: (e) =>
                (0, o.jsx)(u.default, {
                  className:
                    "min-w-8 h-8 bg-white/5 hover:bg-white/10 hover:scale-105 hover:transition-transform transition-transform rounded-full grid place-content-center",
                  href: e.url,
                  target: "_blank",
                  title: f()(e.icon),
                  children: (0, o.jsx)(d.default, {
                    src: "/icons/icon-".concat(e.icon, ".svg"),
                    alt: f()(e.icon),
                    width: 16,
                    height: 16,
                  }),
                }),
            }),
          });
        },
        x = r(57818);
      function b() {
        let e = s.ZP.timeline({ delay: 1 }),
          t = (0, i.useRef)(null);
        return (
          (0, l.V)(
            () => {
              var r;
              let o =
                null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.querySelector(".top");
              (0, n.j)(o, () => {
                var r, o, l, s;
                e.fromTo(
                  null === (r = t.current) || void 0 === r
                    ? void 0
                    : r.querySelector(".info"),
                  { y: 30, opacity: 0 },
                  { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
                )
                  .fromTo(
                    null === (o = t.current) || void 0 === o
                      ? void 0
                      : o.querySelectorAll("ul li"),
                    { y: 30, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power2.inOut",
                    },
                    "-=.7"
                  )
                  .fromTo(
                    null === (l = t.current) || void 0 === l
                      ? void 0
                      : l.querySelectorAll(".actions .btn-action"),
                    { y: 30, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.7"
                  )
                  .fromTo(
                    null === (s = t.current) || void 0 === s
                      ? void 0
                      : s.querySelector(".bottom"),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    "-=.7"
                  );
              });
            },
            { scope: t }
          ),
          (0, o.jsxs)("footer", {
            ref: t,
            className:
              "relative z-1 footer w-full -mt-20 px-4 sm:px-6 max-w-[76em] mx-auto",
            children: [
              (0, o.jsxs)("div", {
                className:
                  "top flex flex-col justify-between md:grid md:grid-cols-3 gap-4 items-center pb-12",
                children: [
                  (0, o.jsxs)("div", {
                    className:
                      "info flex flex-col items-center lg:block text-center lg:text-left",
                    children: [
                      (0, o.jsx)(d.default, {
                        src: "/img/logo/logo.png",
                        alt: "Logo",
                        width: 150,
                        height: 24,
                      }),
                      (0, o.jsx)(p, { className: "mt-6 mb-6 md:mb-12" }),
                    ],
                  }),
                  (0, o.jsx)("ul", {
                    className:
                      "flex flex-col items-center justify-center my-8 lg:my-0 gap-6 text-center",
                    children: (0, o.jsx)(m.l, {
                      of: [
                        { url: "/#explore", title: "Explore" },
                        { url: "/#how-it-works", title: "How it Works" },
                        {
                          url: "/#smart-collateral",
                          title: "Smart Collateral",
                        },
                        { url: "/#building-blocks", title: "Building Blocks" },
                        { url: "/#ecosystem", title: "Ecosystem" },
                      ],
                      render: (e) =>
                        (0, o.jsx)("li", {
                          className: "text-white/70 font-light",
                          children: (0, o.jsx)(u.default, {
                            href: e.url,
                            children: e.title,
                          }),
                        }),
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "actions max-w-[400px] lg:max-w-[250px] md:ml-auto",
                    children: [
                      (0, o.jsx)("a", {
                        href: c.g.LAUNCH_APP_URL,
                        target: "_blank",
                        role: "button",
                        "aria-label":
                          "A button that on click connects you with the wallet",
                        id: "connect-wallet",
                        className: "btn-action launch-app w-full mb-8 ".concat(
                          (0, a.L)({ size: "lg", color: "primary" })
                        ),
                        children: "Launch App",
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className:
                  "bottom text-center text-sm opacity-70 py-10 border-t border-t-border-line",
                children: "\xa9 Cyclic, Inc. All rights reserved.",
              }),
            ],
          })
        );
      }
      s.ZP.registerPlugin(l.V);
      var g = (0, x.default)(() => Promise.resolve(b), { ssr: !1 });
    },
    47583: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return x;
        },
      });
      var o = r(57437),
        l = r(66648),
        s = r(87138),
        n = r(2265),
        i = r(27269),
        a = r(49582),
        c = r(60019),
        d = r(85020),
        u = r(96164);
      let m =
        "before:bg-top-banner-prize before:bg-no-repeat before:w-[40px] before:h-full before:inset-0 before:bg-contain before:block after:block after:bg-contain after:bg-top-banner-prize-bottom after:bg-no-repeat after:w-[32px] after:h-full after:inset-0";
      var h = function (e) {
          let { className: t = "" } = e;
          return (0, o.jsxs)("a", {
            href: "d.g.HEADER_URL",
            target: "_blank",
            className: (0, u.m6)(
              "loop-banner p-2 sm:p-0 flex flex-col sm:flex-row justify-center items-center flex-wrap gap-0.5 md:gap-5 bg-top-banner-gradient absolute top-0 inset-x-0 z-50 min-h-10 text-white text-sm sm:text-base before:bg-top-banner-bg before:bg-no-repeat before:bg-center before:bg-[length:200%_2000%] sm:before:bg-[length:100%_2000%] before:opacity-20 before:absolute before:w-full before:h-full before:inset-0",
              t
            ),
            children: [
              (0, o.jsxs)("div", {
                className:
                  "prizes w-full max-w-6xl mx-auto absolute inset-0 hidden md:flex justify-between h-10 overflow-hidden",
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "prize-left flex flex-row-reverse gap-14 ".concat(
                        m,
                        " after:mt-5"
                      ),
                  }),
                  (0, o.jsx)("div", {
                    className: "prize-right flex gap-14 ".concat(
                      m,
                      " after:mt-2"
                    ),
                  }),
                ],
              }),
            ],
          });
        },
        f = r(16463);
      function p() {
        var e;
        let t =
            ((e = (0, f.usePathname)()),
            /^\/blog\/([a-zA-Z0-9-]+(?:\/[a-zA-Z0-9-]+)*)\/?$/.test(e)),
          [r, u] = (0, n.useState)(!1),
          [m, p] = (0, n.useState)(!1),
          x = (0, n.useRef)(0),
          b = a.ZP.timeline({ delay: 1 }),
          g = (0, n.useRef)(null);
        (0, c.V)(
          () => {
            var e, t, r;
            b.fromTo(
              null === (e = g.current) || void 0 === e
                ? void 0
                : e.querySelector(".logo"),
              { y: -100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
            )
              .fromTo(
                null === (t = g.current) || void 0 === t
                  ? void 0
                  : t.querySelectorAll("ul li"),
                { y: -100, opacity: 0, stagger: 0.1 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.1,
                  ease: "power2.inOut",
                },
                "-=1"
              )
              .fromTo(
                null === (r = g.current) || void 0 === r
                  ? void 0
                  : r.querySelectorAll(".actions .btn-action"),
                { y: -100, opacity: 0, stagger: 0.1 },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.1,
                  duration: 1,
                  ease: "power2.inOut",
                },
                "-=1"
              );
          },
          { scope: g }
        );
        let w = [
          { url: d.g.PAGES.BLOG, title: "Blog" },
          { url: d.g.PAGES.DOCS, title: "Docs", target: "_blank" },
        ];
        return (
          (0, n.useEffect)(() => {
            let e = (e) => {
              let t = e.target.documentElement.scrollTop;
              p(!(t > x.current)), (x.current = t), t <= 0 && p(!1);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [x.current]),
          (0, o.jsxs)("div", {
            className: "overflow-clip",
            children: [
              (0, o.jsx)(h, { className: m ? "sm:fixed" : "" }),
              (0, o.jsxs)("header", {
                ref: g,
                className:
                  "navbar overflow-x-clip w-full z-999 border-b ".concat(
                    m
                      ? "fixed bg-primary/30 border-b-border-line/20 backdrop-blur-2xl sm:top-8"
                      : "absolute border-b-border-line/5 top-14 sm:top-8",
                    " transition-all"
                  ),
                children: [
                  (0, o.jsxs)("nav", {
                    className:
                      "nav-items flex justify-between items-center px-1.5 sm:px-6 max-w-7xl mx-auto ".concat(
                        m ? "min-h-20" : "min-h-32",
                        " transition-all"
                      ),
                    children: [
                      (0, o.jsx)(s.default, {
                        href: "/",
                        children: (0, o.jsx)(l.default, {
                          src: "/img/logo/".concat(
                            t || m ? "logo.png" : "logo.png"
                          ),
                          alt: "Logo",
                          className: "logo lg:mx-8",
                          style: { opacity: 0 },
                          width: 150,
                          height: 24,
                          priority: !0,
                        }),
                      }),
                      (0, o.jsxs)("div", {
                        className: "actions flex items-center gap-1 sm:gap-4",
                        children: [
                          (0, o.jsx)("ul", {
                            className:
                              "items-center justify-center gap-4 sm:gap-6 lg:gap-10 md:col-span-3 flex mr-2",
                          }),
                          (0, o.jsx)("a", {
                            style: { opacity: 0 },
                            href: d.g.LAUNCH_APP_URL,
                            target: "_blank",
                            role: "button",
                            className:
                              "btn-action w-[120px] sm:w-[200px] h-[48px] font-medium inline-flex items-center justify-center p-1 rounded-3xl bg-white text-black shadow shadow-black/5 hover:shadow-md transition duration-300 ease-in-out",
                            children: "Launch App",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: "".concat(
                      r ? "w-full" : "w-0",
                      " aside-backdrop z-[99] h-full fixed inset-0 transition backdrop-blur-sm bg-black-opacity-2"
                    ),
                    onClick: () => u(!1),
                  }),
                  (0, o.jsxs)("aside", {
                    className: "".concat(
                      r ? "translate-x-[0]" : "translate-x-[100%]",
                      " sidebar z-[100] bg-black/90 backdrop:blur-2xl text-white w-full min-h-screen md:w-[350px] p-2.5 fixed inset-y-0 right-0 transform transition duration-500 ease-in-out overflow-y-auto"
                    ),
                    children: [
                      (0, o.jsx)("button", {
                        className:
                          "svg-hover w-[50px] h-[50px] bg-black/5 shadow-inner rounded-full grid place-items-center m-2",
                        onClick: () => u(!1),
                        children: (0, o.jsx)("svg", {
                          className: "icon-nav-close",
                          width: 24,
                          height: 24,
                          children: (0, o.jsx)("use", {
                            href: "/icons/icons.svg#icon-nav-close",
                          }),
                        }),
                      }),
                      (0, o.jsx)("hr", {
                        className: "nav mt-10 mb-10 opacity-10",
                      }),
                      (0, o.jsx)("ul", {
                        className:
                          "flex flex-col h-[calc(100%-20em)] items-center justify-center gap-6",
                        children: (0, o.jsx)(i.l, {
                          of: w,
                          render: (e) =>
                            (0, o.jsx)("li", {
                              className: "text-white text-xl font-light",
                              children: (0, o.jsx)(s.default, {
                                href: e.url,
                                onClick: () => u(!1),
                                children: e.title,
                              }),
                            }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var x = (0, r(57818).default)(() => Promise.resolve(p), { ssr: !1 });
    },
    27269: function (e, t, r) {
      "use strict";
      r.d(t, {
        l: function () {
          return l;
        },
      });
      var o = r(2265);
      let l = (e) => {
        let { render: t, of: r } = e;
        return o.Children.toArray(r.map((e, r) => t(e, r)));
      };
    },
    40144: function (e, t, r) {
      "use strict";
      var o = r(57437),
        l = r(25678),
        s = r(57818),
        n = r(2265);
      let i = () => {
        let e = (0, n.useRef)(0),
          [t, r] = (0, n.useState)("reachedTop"),
          s = (0, n.useCallback)((t) => {
            let o = t.currentTarget.scrollY;
            (e.current = o), r(e.current > 80 ? "scrolling" : "reachedTop");
          }, []);
        return (
          (0, n.useEffect)(
            () => (
              window.addEventListener("scroll", s),
              () => {
                window.removeEventListener("scroll", s);
              }
            ),
            [s]
          ),
          (0, o.jsx)("div", {
            className: "".concat(
              "scrolling" === t ? "block translate-x-0" : "translate-x-40",
              " fixed bottom-6 right-6 sm:bottom-10 sm:right-10 transition-transform will-change-transform"
            ),
            children: (0, o.jsx)(l.E.button, {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className:
                "goTop bg-primary size-14 rounded-full text-white grid place-content-center",
              onClick: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              children: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: (0, o.jsx)("path", { d: "m18 15-6-6-6 6" }),
              }),
            }),
          })
        );
      };
      t.default = (0, s.default)(() => Promise.resolve(i), { ssr: !1 });
    },
    47722: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return o;
        },
      });
      let o = (0, r(43310).tv)({
        base: "active:scale-99 font-medium inline-flex items-center justify-center select-none transition-shadow focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        variants: {
          color: {
            primary: "bg-primary-gradient hover:shadow-lg text-white",
            green: "bg-green-gradient hover:shadow-lg text-white",
            secondary: "bg-white hover:shadow-lg text-black",
            outline:
              "bg-white/20 hover:bg-white/30 hover:shadow-md border border-white/50 text-black rounded-40",
            outlineb:
              "bg-white/20 hover:bg-white/30 hover:shadow-md border border-white/50 text-black rounded-40",
            social:
              "bg-white rounded-28 hover:shadow-md shadow-social border border-social-border",
          },
          size: {
            sm: "text-sm px-2 sm:px-4 md:px-6 min-h-btn-sm min-w-btn-sm rounded-20",
            md: "text-base px-2 sm:px-4 md:px-6 min-h-btn-md min-w-btn-md rounded-3xl",
            lg: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg min-w-btn-lg rounded-28",
            lgx: "text-base px-2 sm:px-4 md:px-6 min-h-btn-slg min-h-btn-lg rounded-28",
          },
          icon: { sm: "gap-1", md: "gap-1.5", lg: "gap-2" },
        },
        defaultVariants: { size: "md", color: "primary" },
      });
    },
    57046: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return S;
        },
      });
      var o = r(57437),
        l = r(16909),
        s = r(62655),
        n = r(66094),
        i = r(93191),
        a = r(40181),
        c = r(62536),
        d = r(8483),
        u = r(16491),
        m = r(60152),
        h = r(78118),
        f = r(27641),
        p = r(16537),
        x = r(73035),
        b = r(78574),
        g = r(21477),
        w = r(95422),
        v = r(56300);
      let y = { ...u.R, iconUrl: "/icons/logo-ethereum.svg" },
        j = (0, s.vX)({
          appName: "LoopFi",
          projectId: "c7a1c889a",
          chains: [y, d.F],
          wallets: [
            {
              groupName: "Suggested",
              wallets: [h.U, f.u, p.D, x.P, b.D, g.p, w.a, v.l],
            },
          ],
          ssr: !0,
          transports: { [y.id]: (0, c.d)(), [d.F.id]: (0, c.d)() },
        });
      (0, m.v)({ chain: u.R, transport: (0, c.d)() });
      let N = (0, l.W)({
          accentColor: "rgb(78, 183, 0)",
          borderRadius: "large",
          fontStack: "system",
        }),
        k = new n.S();
      var S = (e) => {
        let { children: t } = e;
        return (0, o.jsx)(a.F, {
          config: j,
          children: (0, o.jsx)(i.aH, {
            client: k,
            children: (0, o.jsx)(s.pj, { theme: N, children: t }),
          }),
        });
      };
    },
    53054: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        9757, 9141, 922, 9472, 2098, 6596, 19, 2225, 5262, 8116, 2971, 7023,
        1744,
      ],
      function () {
        return e((e.s = 99557));
      }
    ),
      (_N_E = e.O());
  },
]);
