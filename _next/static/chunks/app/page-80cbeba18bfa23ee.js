(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    27463: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 31638)),
        Promise.resolve().then(i.bind(i, 55129)),
        Promise.resolve().then(i.bind(i, 77542)),
        Promise.resolve().then(i.bind(i, 43860)),
        Promise.resolve().then(i.bind(i, 10039)),
        Promise.resolve().then(i.bind(i, 35255));
    },
    85020: function (e, t, i) {
      "use strict";
      i.d(t, {
        g: function () {
          return l;
        },
      });
      let l = {
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
    31638: function (e, t, i) {
      "use strict";
      var l = i(57437),
        a = i(66648),
        s = i(27269),
        r = i(49582),
        o = i(60019),
        n = i(2265),
        c = i(87520);
      r.ZP.registerPlugin(o.V),
        (t.default = function () {
          let e = r.ZP.timeline({ delay: 1 }),
            t = (0, n.useRef)(null);
          return (
            (0, o.V)(
              () => {
                var i;
                let l =
                  null === (i = t.current) || void 0 === i
                    ? void 0
                    : i.querySelector("h2");
                r.ZP.set(l, { y: 50, opacity: 0 }),
                  (0, c.j)(l, () => {
                    var i;
                    e.to(l, {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    }).fromTo(
                      null === (i = t.current) || void 0 === i
                        ? void 0
                        : i.querySelectorAll(".body .card"),
                      { y: 30, opacity: 0, stagger: 0.1 },
                      {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        ease: "power2.inOut",
                      },
                      "-=.5"
                    );
                  });
              },
              { scope: t }
            ),
            (0, l.jsxs)("section", {
              ref: t,
              id: "building-blocks",
              className:
                "relative overflow-hidden innovations pt-16 pb-8 md:pt-36",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "title px-2 text-center translate-y-3 md:translate-y-5 xl:translate-y-8",
                  children: (0, l.jsx)("h2", {
                    className:
                      "text-3xl md:text-7xl xl:text-9xl font-medium text-white",
                    children: "Building Blocks",
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "relative body grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1310px] mx-auto px-4",
                  children: (0, l.jsx)(s.l, {
                    of: [
                      {
                        img: "LS",
                        title: "Looped LP Strategies",
                        desc: "Increase your LP exposure and start looping yield and points.",
                      },
                      {
                        img: "YMD",
                        title: "Yield Meta Derivative (lpETH)",
                        desc: "Stake lpETH and earn diversified real yield from multiple leveraged LP strategies.",
                      },
                      {
                        img: "DLV",
                        title: "Dynamic Liquidity Vault",
                        desc: "Pair CYCLE with lpETH and lock for governance, boosted emissions and revenue share.",
                      },
                    ],
                    render: (e, t) =>
                      (0, l.jsxs)("div", {
                        className:
                          "relative card card-loop w-full max-w-[410px] mx-auto px-6 pt-6 pb-10 2xl:p-12 rounded-40 text-center",
                        children: [
                          (0, l.jsx)("div", {
                            className: "relative aspect-boxsm sm:aspect-box",
                            children: (0, l.jsx)(a.default, {
                              src: "/img/new/".concat(e.img, ".png"),
                              alt: "innovations ".concat(t),
                              className: "object-contain",
                              fill: !0,
                            }),
                          }),
                          (0, l.jsx)("h2", {
                            "data-text": e.title,
                            className: "relative mt-4 ".concat(
                              1 === t
                                ? "text-2xl"
                                : 2 === t
                                ? "text-2xl sm:text-3xl"
                                : "text-2xl sm:text-3xl xl:text-3.5xl",
                              " font-medium !leading-tight bg-text-linear bg-text-clip text-reflection"
                            ),
                            children: e.title,
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "mt-5 text-base sm:text-lg leading-tight max-w-[310px] mx-auto opacity-70",
                            children: e.desc,
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            })
          );
        });
    },
    55129: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return g;
        },
      });
      var l = i(57437),
        a = i(60019),
        s = i(49582),
        r = i(90035),
        o = i.n(r),
        n = i(87520),
        c = i(2265),
        d = i(96164);
      function m(e) {
        let { children: t, className: i } = e;
        return (0, l.jsxs)("div", {
          className: (0, d.m6)(
            "h-[50rem] w-full bg-white bg-grid-black/[0.2] relative",
            i || ""
          ),
          children: [
            (0, l.jsx)("div", {
              className:
                "absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
            }),
            t,
          ],
        });
      }
      var x = i(66648),
        u = i(27269);
      i(4250);
      var p = function (e) {
        let { data: t, isReverse: i } = e,
          a =
            "marquee-item relative aspect-square m-2 min-w-[100px] sm:min-w-[120px] md:min-w-[160px] h-[100px] sm:h-[120px] md:h-[160px] marquee-img-circle";
        return (0, l.jsx)("div", {
          className: "marquee",
          children: (0, l.jsxs)("div", {
            className: "marquee-content gap-20 ".concat(i ? "reverse" : ""),
            children: [
              (0, l.jsx)(u.l, {
                of: t,
                render: (e) =>
                  (0, l.jsx)("div", {
                    className: a,
                    children: (0, l.jsx)(x.default, {
                      src: "/img/ecosystem/".concat(e.img),
                      alt: "Logo",
                      className: "object-contain rounded-full",
                      fill: !0,
                      title: e.title,
                    }),
                  }),
              }),
              (0, l.jsx)(u.l, {
                of: t,
                render: (e) =>
                  (0, l.jsx)("div", {
                    className: a,
                    children: (0, l.jsx)(x.default, {
                      src: "/img/ecosystem/".concat(e.img),
                      alt: "Logo",
                      className: "object-contain rounded-full",
                      fill: !0,
                      title: e.title,
                    }),
                  }),
              }),
            ],
          }),
        });
      };
      s.ZP.registerPlugin(a.V);
      var g = function () {
        let e = s.ZP.timeline({ delay: 1 }),
          t = (0, c.useRef)(null);
        (0, a.V)(
          () => {
            var i;
            let l =
              null === (i = t.current) || void 0 === i
                ? void 0
                : i.querySelector("h2");
            s.ZP.set(l, { y: 50, opacity: 0 }),
              (0, n.j)(l, () => {
                e.to(l, {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power2.inOut",
                });
              });
          },
          { scope: t }
        );
        let i = [
          { img: "pendle.svg", title: "Pendle" },
          { img: "renzoFinance.svg", title: "Renzo Finance" },
          { img: "etherfi.svg", title: "EtherFi" },
          { img: "kelpDAO.svg", title: "Kelp DAO" },
          { img: "pufferFinance.svg", title: "Puffer Finance" },
          { img: "eigenlayer.svg", title: "Eigenlayer" },
          { img: "ethereum.svg", title: "Ethereum" },
          { img: "renzoFinance.svg", title: "Renzo Finance" },
          { img: "scroll.svg", title: "Scroll" },
          { img: "stoneETH.svg", title: "Stone ETH" },
          { img: "bedrock.svg", title: "Bedrock" },
          { img: "symbiotic.svg", title: "Symbiotic" },
          { img: "turtleQuaaloops.svg", title: "Turtle Quaaloops" },
          { img: "turtleScroll.svg", title: "Turtle Scroll" },
          { img: "turtleSwell.svg", title: "Turtle Swell" },
          { img: "turtleKelp.svg", title: "Turtle Kelp" },
        ];
        return (0, l.jsx)("section", {
          ref: t,
          id: "ecosystem",
          className: "ecosystem overflow-hidden pt-16 md:pt-36",
          children: (0, l.jsxs)(m, {
            className:
              "h-[34rem] sm:h-[38rem] md:h-[50rem] bg-transparent bg-grid-white/[0.05]",
            children: [
              (0, l.jsx)("div", {
                className:
                  "title px-2 text-center translate-y-4 md:translate-y-10",
                children: (0, l.jsx)("h2", {
                  className:
                    "text-3xl md:text-4xl lg:text-9xl font-medium text-white",
                  children: "Ecosystem",
                }),
              }),
              (0, l.jsxs)("div", {
                className: "relative body flex flex-col gap-8",
                children: [
                  (0, l.jsx)(p, { data: i }),
                  (0, l.jsx)(p, { isReverse: !0, data: o()(i) }),
                  (0, l.jsxs)("div", {
                    className: "bubbles",
                    children: [
                      (0, l.jsx)("div", { className: "bubble md" }),
                      (0, l.jsx)("div", { className: "bubble md" }),
                      (0, l.jsx)("div", {
                        className: "bubble md hidden sm:block",
                      }),
                      (0, l.jsx)("div", {
                        className: "bubble md hidden sm:block",
                      }),
                      (0, l.jsx)("div", { className: "bubble sm" }),
                      (0, l.jsx)("div", { className: "bubble sm" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    43860: function (e, t, i) {
      "use strict";
      var l = i(57437),
        a = i(66648),
        s = i(27269),
        r = i(49582),
        o = i(60019),
        n = i(2265),
        c = i(87520);
      r.ZP.registerPlugin(o.V),
        (t.default = function () {
          let e = r.ZP.timeline({ delay: 1 }),
            t = (0, n.useRef)(null);
          return (
            (0, o.V)(
              () => {
                var i;
                let l =
                  null === (i = t.current) || void 0 === i
                    ? void 0
                    : i.querySelector("h2");
                r.ZP.set(l, { y: 50, opacity: 0 }),
                  (0, c.j)(l, () => {
                    var i;
                    e.to(l, {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    }).fromTo(
                      null === (i = t.current) || void 0 === i
                        ? void 0
                        : i.querySelectorAll(".body .card"),
                      { y: 30, opacity: 0, stagger: 0.1 },
                      {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 1,
                        ease: "power2.inOut",
                      },
                      "-=.5"
                    );
                  });
              },
              { scope: t }
            ),
            (0, l.jsxs)("section", {
              ref: t,
              id: "how-it-works",
              className:
                "relative overflow-hidden innovations pt-16 pb-8 md:pt-36",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "title px-2 text-center translate-y-3 md:translate-y-5 xl:translate-y-8",
                  children: (0, l.jsx)("h2", {
                    className:
                      "text-3xl md:text-7xl xl:text-9xl font-medium text-white",
                    children: "How it works",
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "relative body grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1310px] mx-auto px-4",
                  children: (0, l.jsx)(s.l, {
                    of: [
                      {
                        title: "LOCKER",
                        desc: "Lockers qualify for emissions and protocol revenue",
                      },
                      {
                        title: "LOOPER",
                        desc: "Loopers pay interest for leveraged yield + points",
                      },
                      {
                        title: "LENDER",
                        desc: "Lenders receive the interest of all Loopers",
                      },
                    ],
                    render: (e, t) =>
                      (0, l.jsxs)("div", {
                        className:
                          "relative card card-loop w-full max-w-[410px] mx-auto px-6 pt-6 pb-10 2xl:p-12 rounded-40 text-center",
                        children: [
                          (0, l.jsx)("div", {
                            className: "relative aspect-boxsm sm:aspect-box",
                            children: (0, l.jsx)(a.default, {
                              src: "/img/new/".concat(e.title, ".png"),
                              alt: "innovations ".concat(t),
                              className: "object-contain",
                              fill: !0,
                            }),
                          }),
                          (0, l.jsx)("h2", {
                            "data-text": e.title,
                            className:
                              "relative mt-4 text-3xl xl:text-4.5xl font-medium !leading-tight bg-text-linear bg-text-clip text-reflection",
                            children: e.title,
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "mt-5 text-base sm:text-lg leading-tight max-w-[310px] mx-auto opacity-70",
                            children: e.desc,
                          }),
                        ],
                      }),
                  }),
                }),
              ],
            })
          );
        });
    },
    77542: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return m;
        },
      });
      var l = i(57437),
        a = i(47722),
        s = i(66648),
        r = i(49582),
        o = i(60019),
        n = i(2265),
        c = i(85020),
        d = () =>
          (0, l.jsx)("section", {
            className: "quaaloops w-full px-4 mt-20",
            children: (0, l.jsxs)("div", {
              className:
                "quaaloops-body shadow-hcard relative overflow-x-hidden px-4 sm:px-16 py-10 md:py-4 bg-white/70 border border-border-new shadow-shadow-new min-h-56 sm:min-h-48 max-w-7xl mx-auto rounded-28 overflow-hidden flex items-center",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "absolute inset-0 bg-quaaloops bg-cover rounded-2xl after:bg-quaaloops-gradient after:bg-cover after:absolute after:inset-0 after:size-full",
                }),
                (0, l.jsxs)("div", {
                  className:
                    "mint-content w-full relative z-1 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "groups flex flex-col gap-4 z-1 text-center md:text-left",
                      children: [
                        (0, l.jsx)("h2", {
                          className:
                            "text-3xl lg:text-3.5xl font-medium text-white",
                          children: "Bootstrap the Cyclic AI",
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "text-sm opacity-50 max-w-[432px] pb-6 md:pb-0 text-white",
                          children:
                            "Deposit ETH and LRTs to bootstrap borrowing liquidity for the Cyclic AI. You earn points for the upcoming Airdrop",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "q-action w-full md:w-auto flex justify-center md:justify-end items-center lg:mr-9",
                      children: [
                        (0, l.jsx)(s.default, {
                          src: "/img/header/nft-chilling.png",
                          className:
                            "absolute right-[-12%] sm:right-[16%] lg:right-[28%]",
                          alt: "NFT BG",
                          width: 285,
                          height: 208,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
      r.ZP.registerPlugin(o.V);
      var m = function () {
        let e = r.ZP.timeline({ delay: 2 }),
          t = (0, n.useRef)(null);
        return (
          (0, o.V)(
            () => {
              var i, l, a, s, r, o, n, c;
              null === (l = document.body) ||
                void 0 === l ||
                null === (i = l.classList) ||
                void 0 === i ||
                i.add("overflow-x-hidden"),
                e
                  .fromTo(
                    null === (a = t.current) || void 0 === a
                      ? void 0
                      : a.querySelectorAll("h1"),
                    { y: -20, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (s = document) || void 0 === s
                      ? void 0
                      : s.querySelector(".lines-bg"),
                    { scale: 1.2, opacity: 0 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                      onComplete: () => {
                        var e, t;
                        null === (t = document.body) ||
                          void 0 === t ||
                          null === (e = t.classList) ||
                          void 0 === e ||
                          e.remove("overflow-x-hidden");
                      },
                    }
                  )
                  .fromTo(
                    null === (r = t.current) || void 0 === r
                      ? void 0
                      : r.querySelector(".main-star"),
                    { scale: 0.8, y: 30, opacity: 0 },
                    {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (o = t.current) || void 0 === o
                      ? void 0
                      : o.querySelectorAll("p"),
                    { y: 50, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      stagger: 0.1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (n = t.current) || void 0 === n
                      ? void 0
                      : n.querySelectorAll(".actions .btn-action"),
                    { y: 30, opacity: 0, stagger: 0.1 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      duration: 1,
                      ease: "power2.inOut",
                    },
                    "-=.5"
                  )
                  .fromTo(
                    null === (c = t.current) || void 0 === c
                      ? void 0
                      : c.querySelector(".quaaloops"),
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                    "-=.5"
                  );
            },
            { scope: t }
          ),
          (0, l.jsxs)("div", {
            ref: t,
            children: [
              (0, l.jsx)(s.default, {
                style: { opacity: 0 },
                src: "/img/new/bg-loop-circles.png",
                alt: "Star",
                className:
                  "main-star absolute inset-x-0 mx-auto top-36 lg:top-32 -z-1",
                width: 1440,
                height: 621,
                priority: !0,
              }),
              (0, l.jsx)("h1", {
                className:
                  "flex flex-col items-center gap-4 lg:gap-5 text-4.5xl md:text-6xl lg:text-7.5xl text-text-new header-title-shadow font-steradian leading-tight text-center max-w-[600px] mx-auto",
                children: "Yield Leverage Restaking",
              }),
              (0, l.jsx)("p", {
                style: { opacity: 0 },
                className:
                  "mt-8 flex justify-center text-center text-xl sm:text-2xl opacity-70 text-white",
                children:
                  "Max leverage, max points, max yield with LP tokens as smart collateral.",
              }),
              (0, l.jsx)(d, {}),
            ],
          })
        );
      };
    },
    10039: function (e, t, i) {
      "use strict";
      var l = i(57437),
        a = i(60019),
        s = i(49582),
        r = i(2265);
      s.ZP.registerPlugin(a.V),
        (t.default = function () {
          let e = (0, r.useRef)(null);
          return (
            (0, a.V)(
              () => {
                let t = e.current;
                s.ZP.set(t, { y: 50, opacity: 0 }),
                  s.ZP.to(t, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 5,
                    ease: "power2.inOut",
                  });
              },
              { scope: e }
            ),
            (0, l.jsx)("div", {
              ref: e,
              className:
                "mt-36 sm:mt-48 px-4 text-white opacity-70 text-2xl max-w-[960px] mx-auto text-center",
              style: { textShadow: "4px 0px 8px #ffffffb5" },
              children:
                "Cyclic AI is a money market utilizing smart collateral with automated leverage to maximize capital efficiency and returns of Restaking products.",
            })
          );
        });
    },
    35255: function (e, t, i) {
      "use strict";
      var l = i(57437),
        a = i(66648),
        s = i(49582),
        r = i(60019),
        o = i(2265),
        n = i(87520);
      s.ZP.registerPlugin(r.V),
        (t.default = function () {
          let e = s.ZP.timeline({ delay: 1 }),
            t = (0, o.useRef)(null);
          return (
            (0, r.V)(
              () => {
                var i;
                let l =
                  null === (i = t.current) || void 0 === i
                    ? void 0
                    : i.querySelector("h2");
                s.ZP.set(l, { y: 50, opacity: 0 }),
                  (0, n.j)(l, () => {
                    var i;
                    e.to(l, {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.inOut",
                    }).fromTo(
                      null === (i = t.current) || void 0 === i
                        ? void 0
                        : i.querySelector(".body .card"),
                      { y: 30, opacity: 0 },
                      { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
                      "-=.5"
                    );
                  });
              },
              { scope: t }
            ),
            (0, l.jsxs)("section", {
              ref: t,
              id: "smart-collateral",
              className:
                "relative overflow-hidden innovations pt-16 pb-8 md:pt-36",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "title px-2 text-center translate-y-3 md:translate-y-5 xl:translate-y-8",
                  children: (0, l.jsx)("h2", {
                    className:
                      "text-3xl md:text-7xl xl:text-9xl font-medium text-white",
                    children: "Smart Collateral",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "relative body max-w-[1310px] mx-auto",
                  children: (0, l.jsxs)("div", {
                    className:
                      "relative card card-loop flex justify-center aspect-smartc sm:aspect-video w-full max-h-[635px] px-6 pt-6 pb-6 sm:pb-10 2xl:p-12 rounded-40 text-center",
                    children: [
                      (0, l.jsx)(a.default, {
                        src: "/img/new/SMART_COLLATERAL.png",
                        alt: "smart collateral",
                        className:
                          "object-contain sm:max-w-[1000px] sm:mx-auto pb-12 sm:pb-20 lg:pb-0",
                        fill: !0,
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "text-sm sm:text-base lg:text-lg mt-auto text-center opacity-70 leading-normal",
                        children:
                          "Utilize your liquidity pool tokens or lending receipt tokens as collateral for maximum capital efficiency.",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        });
    },
    27269: function (e, t, i) {
      "use strict";
      i.d(t, {
        l: function () {
          return a;
        },
      });
      var l = i(2265);
      let a = (e) => {
        let { render: t, of: i } = e;
        return l.Children.toArray(i.map((e, i) => t(e, i)));
      };
    },
    47722: function (e, t, i) {
      "use strict";
      i.d(t, {
        L: function () {
          return l;
        },
      });
      let l = (0, i(43310).tv)({
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
    4250: function () {},
  },
  function (e) {
    e.O(0, [1034, 922, 2098, 19, 5262, 35, 2971, 7023, 1744], function () {
      return e((e.s = 27463));
    }),
      (_N_E = e.O());
  },
]);
