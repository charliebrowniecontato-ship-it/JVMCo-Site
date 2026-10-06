(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 50372, e => {
    "use strict";
    var t = e.i(92014),
        r = e.i(28562),
        i = e.i(70363);
    let n = t.default.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558487149954",
        o = ["Estratégia e posicionamento", "Marketing e aquisição", "Vendas e operação comercial", "CRM, dados e tecnologia", "Parcerias e novos negócios"];
    e.s(["LeadForm", 0, function() {
        let [e, t] = (0, i.useState)("");
        return (0, r.jsxs)("form", {
            className: "lead-form",
            onSubmit: function(e) {
                e.preventDefault();
                let r = new FormData(e.currentTarget),
                    i = String(r.get("name") || "").trim(),
                    o = String(r.get("company") || "").trim(),
                    a = String(r.get("priority") || "").trim(),
                    s = String(r.get("context") || "").trim();
                if (!i || !o || !a || !s) return void t("Preencha nome, empresa, prioridade e contexto para continuar.");
                t("");
                let l = `Ol\xe1, Jo\xe3o. Vim pelo site da JVM&Co.

Nome: ${i}
Empresa: ${o}
Prioridade: ${a}
Contexto: ${s}

Quero entender qual \xe9 o pr\xf3ximo movimento mais coerente para o neg\xf3cio.`;
                window.open(`https://wa.me/${n}?text=${encodeURIComponent(l)}`, "_blank", "noopener,noreferrer")
            },
            noValidate: !0,
            children: [(0, r.jsxs)("div", {
                className: "field-grid",
                children: [(0, r.jsxs)("label", {
                    children: [(0, r.jsx)("span", {
                        children: "Seu nome"
                    }), (0, r.jsx)("input", {
                        name: "name",
                        autoComplete: "name",
                        placeholder: "Nome e sobrenome"
                    })]
                }), (0, r.jsxs)("label", {
                    children: [(0, r.jsx)("span", {
                        children: "Empresa"
                    }), (0, r.jsx)("input", {
                        name: "company",
                        autoComplete: "organization",
                        placeholder: "Nome da empresa"
                    })]
                })]
            }), (0, r.jsxs)("label", {
                children: [(0, r.jsx)("span", {
                    children: "O que precisa avançar agora?"
                }), (0, r.jsxs)("select", {
                    name: "priority",
                    defaultValue: "",
                    children: [(0, r.jsx)("option", {
                        value: "",
                        disabled: !0,
                        children: "Selecione a prioridade"
                    }), o.map(e => (0, r.jsx)("option", {
                        value: e,
                        children: e
                    }, e))]
                })]
            }), (0, r.jsxs)("label", {
                children: [(0, r.jsx)("span", {
                    children: "Contextualize"
                }), (0, r.jsx)("textarea", {
                    name: "context",
                    rows: 5,
                    placeholder: "Conte brevemente o momento da empresa, o principal desafio e o que você pretende construir."
                })]
            }), (0, r.jsxs)("div", {
                className: "form-action",
                children: [(0, r.jsx)("p", {
                    children: "A conversa continua diretamente com João pelo WhatsApp."
                }), (0, r.jsxs)("button", {
                    type: "submit",
                    className: "button button-primary",
                    children: ["Apresentar meu negócio ", (0, r.jsx)("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    })]
                })]
            }), (0, r.jsx)("p", {
                className: "form-error",
                role: "alert",
                "aria-live": "polite",
                children: e
            })]
        })
    }])
}, 68974, e => {
    "use strict";
    var t = e.i(28562),
        r = e.i(70363);
    let i = "jvmco-cookie-preference-v1",
        n = "jvmco-cookie-preference-change";

    function o(e) {
        return window.addEventListener("storage", e), window.addEventListener(n, e), () => {
            window.removeEventListener("storage", e), window.removeEventListener(n, e)
        }
    }

    function a() {
        return window.localStorage.getItem(i) ? ? ""
    }
    let s = {
        privacy: {
            eyebrow: "PRIVACIDADE",
            title: "Política de privacidade",
            sections: [{
                title: "Dados informados por você",
                text: "O formulário solicita nome, empresa, prioridade e contexto. Essas informações são organizadas no seu navegador e enviadas ao WhatsApp somente quando você decide iniciar a conversa."
            }, {
                title: "Uso das informações",
                text: "Os dados são usados para compreender a solicitação, responder ao contato e avaliar a aderência entre a demanda apresentada e o ecossistema JVM&Co."
            }, {
                title: "Serviços externos",
                text: "Ao abrir o WhatsApp ou acessar sites parceiros, passam a valer também as políticas de privacidade dessas plataformas. A JVM&Co. não vende dados pessoais."
            }, {
                title: "Seus direitos",
                text: "Você pode solicitar acesso, correção ou exclusão de informações compartilhadas entrando em contato pelo número +55 84 8714-9954."
            }]
        },
        cookies: {
            eyebrow: "COOKIES",
            title: "Política de cookies",
            sections: [{
                title: "Preferência local",
                text: "Este site guarda no navegador apenas a sua escolha sobre cookies, para que o aviso não seja exibido novamente a cada visita."
            }, {
                title: "Cookies essenciais",
                text: "São recursos necessários para preservar preferências e garantir o funcionamento básico da experiência. Eles não são usados para publicidade."
            }, {
                title: "Medição e marketing",
                text: "No momento, o site não ativa cookies próprios de publicidade ou análise comportamental. Se isso mudar, esta política e o mecanismo de consentimento serão atualizados."
            }, {
                title: "Alterar sua escolha",
                text: "Você pode reabrir este painel pelo link Cookies no rodapé e registrar uma nova preferência quando desejar."
            }]
        }
    };
    e.s(["SitePolicies", 0, function() {
        let [e, l] = (0, r.useState)(null), [c, d] = (0, r.useState)(!1), u = (0, r.useRef)(null), p = (0, r.useSyncExternalStore)(o, a, () => "pending");

        function f(e) {
            window.localStorage.setItem(i, e), window.dispatchEvent(new Event(n)), d(!0), l(null)
        }

        function m() {
            d(!0), l("cookies")
        }(0, r.useEffect)(() => {
            if (!e) return;
            let t = document.body.style.overflow;

            function r(e) {
                "Escape" === e.key && l(null)
            }
            return document.body.style.overflow = "hidden", u.current ? .focus(), window.addEventListener("keydown", r), () => {
                document.body.style.overflow = t, window.removeEventListener("keydown", r)
            }
        }, [e]);
        let g = e ? s[e] : null;
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                className: "legal-links",
                "aria-label": "Informações legais",
                children: [(0, t.jsx)("button", {
                    type: "button",
                    onClick: () => l("privacy"),
                    children: "Política de privacidade"
                }), (0, t.jsx)("button", {
                    type: "button",
                    onClick: m,
                    children: "Cookies"
                })]
            }), "" !== p || c ? null : (0, t.jsxs)("aside", {
                className: "cookie-banner",
                "aria-label": "Preferências de cookies",
                children: [(0, t.jsxs)("div", {
                    children: [(0, t.jsx)("span", {
                        className: "technical",
                        children: "PRIVACIDADE POR PADRÃO"
                    }), (0, t.jsx)("p", {
                        children: "Usamos apenas recursos essenciais para preservar sua preferência e manter a experiência funcionando."
                    })]
                }), (0, t.jsxs)("div", {
                    className: "cookie-actions",
                    children: [(0, t.jsx)("button", {
                        type: "button",
                        className: "cookie-link",
                        onClick: m,
                        children: "Entender os cookies"
                    }), (0, t.jsx)("button", {
                        type: "button",
                        className: "cookie-secondary",
                        onClick: () => f("essential"),
                        children: "Somente essenciais"
                    }), (0, t.jsx)("button", {
                        type: "button",
                        className: "cookie-primary",
                        onClick: () => f("accepted"),
                        children: "Aceitar"
                    })]
                })]
            }), g ? (0, t.jsx)("div", {
                className: "policy-overlay",
                role: "presentation",
                onMouseDown: e => {
                    e.target === e.currentTarget && l(null)
                },
                children: (0, t.jsxs)("section", {
                    className: "policy-dialog",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "policy-title",
                    children: [(0, t.jsxs)("div", {
                        className: "policy-header",
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)("span", {
                                className: "technical",
                                children: g.eyebrow
                            }), (0, t.jsx)("h2", {
                                id: "policy-title",
                                children: g.title
                            })]
                        }), (0, t.jsx)("button", {
                            ref: u,
                            type: "button",
                            className: "policy-close",
                            onClick: () => l(null),
                            "aria-label": "Fechar política",
                            children: "×"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "policy-content",
                        children: g.sections.map(e => (0, t.jsxs)("article", {
                            children: [(0, t.jsx)("h3", {
                                children: e.title
                            }), (0, t.jsx)("p", {
                                children: e.text
                            })]
                        }, e.title))
                    }), (0, t.jsxs)("div", {
                        className: "policy-footer",
                        children: [(0, t.jsx)("span", {
                            className: "technical",
                            children: "JVM&CO. / SETEMBRO DE 2026"
                        }), "cookies" === e ? (0, t.jsx)("button", {
                            type: "button",
                            onClick: () => f("essential"),
                            children: "Manter somente essenciais"
                        }) : null]
                    })]
                })
            }) : null]
        })
    }])
}, 96146, (e, t, r) => {
    "use strict";
    e.i(92014), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = e.r(36437),
        a = e.r(56421),
        s = e.r(28562),
        l = a._(e.r(70363)),
        c = o._(e.r(99608)),
        d = e.r(28533);

    function u() {
        return [(0, s.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, s.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function p(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    let f = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, i, n;
        return e.reduce(p, []).reverse().concat(u().reverse()).filter((t = new Set, r = new Set, i = new Set, n = {}, e => {
            let o = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? o = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = f.length; t < r; t++) {
                        let r = f[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) i.has(r) ? o = !1 : i.add(r);
                            else {
                                let t = e.props[r],
                                    i = n[r] || new Set;
                                ("name" !== r || !a) && i.has(t) ? o = !1 : (i.add(t), n[r] = i)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return l.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, l.useContext)(d.HeadManagerContext);
        return (0, s.jsx)(c.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 29504, (e, t, r) => {
    "use strict";

    function i({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: o,
        objectFit: a
    }) {
        let s = r ? 40 * r : e,
            l = n ? 40 * n : t,
            c = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 7561, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 95553, (e, t, r) => {
    "use strict";
    e.i(92014), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let i = e.r(90742),
        n = e.r(29504),
        o = e.r(7561),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function s(e) {
        return void 0 !== e.default
    }

    function l(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function c({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: d = !1,
        preload: u = !1,
        loading: p,
        className: f,
        quality: m,
        width: g,
        height: h,
        fill: b = !1,
        style: v,
        overrideSrc: y,
        onLoad: x,
        onLoadingComplete: j,
        placeholder: w = "empty",
        blurDataURL: _,
        fetchPriority: E,
        decoding: P = "async",
        layout: C,
        objectFit: S,
        objectPosition: O,
        lazyBoundary: R,
        lazyRoot: k,
        ...M
    }, N) {
        var I;
        let A, z, D, {
                imgConf: $,
                showAltText: T,
                blurComplete: L,
                defaultLoader: U
            } = N,
            q = $ || o.imageConfigDefault;
        if ("allSizes" in q) A = q;
        else {
            let e = [...q.deviceSizes, ...q.imageSizes].sort((e, t) => e - t),
                t = q.deviceSizes.sort((e, t) => e - t),
                r = q.qualities ? .sort((e, t) => e - t);
            A = { ...q,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === U) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let V = M.loader || U;
        delete M.loader, delete M.srcSet;
        let F = "__next_img_default" in V;
        if (F) {
            if ("custom" === A.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = V;
            V = t => {
                let {
                    config: r,
                    ...i
                } = t;
                return e(i)
            }
        }
        if (C) {
            "fill" === C && (b = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[C];
            e && (v = { ...v,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[C];
            r && !t && (t = r)
        }
        let W = "",
            B = l(g),
            G = l(h);
        if ((I = e) && "object" == typeof I && (s(I) || void 0 !== I.src)) {
            let t = s(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (z = t.blurWidth, D = t.blurHeight, _ = _ || t.blurDataURL, W = t.src, !b)
                if (B || G) {
                    if (B && !G) {
                        let e = B / t.width;
                        G = Math.round(t.height * e)
                    } else if (!B && G) {
                        let e = G / t.height;
                        B = Math.round(t.width * e)
                    }
                } else B = t.width, G = t.height
        }
        let J = !d && !u && ("lazy" === p || void 0 === p);
        (!(e = "string" == typeof e ? e : W) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, J = !1), A.unoptimized && (r = !0), F && !A.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = l(m),
            H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: O
            } : {}, T ? {} : {
                color: "transparent"
            }, v),
            K = L || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:z,blurHeight:D,blurDataURL:_||"",objectFit:H.objectFit})}")` : `url("${w}")`,
            Q = a.includes(H.objectFit) ? "fill" === H.objectFit ? "100% 100%" : "cover" : H.objectFit,
            Y = K ? {
                backgroundSize: Q,
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K
            } : {},
            Z = function({
                config: e,
                src: t,
                unoptimized: r,
                width: n,
                quality: o,
                sizes: a,
                loader: s
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, i.getDeploymentId)();
                        if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) e = void 0;
                        else if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let i = new URLSearchParams(t.slice(r + 1));
                                i.get("dpl") || (i.append("dpl", e), t = t.slice(0, r) + "?" + i.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: l,
                    kind: c
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, i) {
                    if (i) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(i);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, n, a), d = l.length - 1;
                return {
                    sizes: a || "w" !== c ? a : "100vw",
                    srcSet: l.map((r, i) => `${s({config:e,src:t,quality:o,width:r})} ${"w"===c?r:i+1}${c}`).join(", "),
                    src: s({
                        config: e,
                        src: t,
                        quality: o,
                        width: l[d]
                    })
                }
            }({
                config: A,
                src: e,
                unoptimized: r,
                width: B,
                quality: X,
                sizes: t,
                loader: V
            }),
            ee = J ? "lazy" : p;
        return {
            props: { ...M,
                loading: ee,
                fetchPriority: E,
                width: B,
                height: G,
                decoding: P,
                className: f,
                style: { ...H,
                    ...Y
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: y || Z.src
            },
            meta: {
                unoptimized: r,
                preload: u || d,
                placeholder: w,
                fill: b
            }
        }
    }
}, 12588, (e, t, r) => {
    "use strict";
    e.i(92014), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let i = e.r(36437)._(e.r(70363)),
        n = e.r(7561),
        o = i.default.createContext(n.imageConfigDefault)
}, 14122, (e, t, r) => {
    "use strict";
    e.i(92014), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e.r(36437)._(e.r(70363)).default.createContext(null)
}, 89652, (e, t, r) => {
    "use strict";

    function i(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 85224, (e, t, r) => {
    "use strict";
    e.i(92014), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let i = e.r(89652),
        n = e.r(90742);

    function o({
        config: e,
        src: t,
        width: r,
        quality: a
    }) {
        let s = (0, n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) s = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1)),
                        i = r.get("dpl");
                    if (i) {
                        s = i, r.delete("dpl");
                        let n = r.toString();
                        t = t.slice(0, e) + (n ? "?" + n : "")
                    }
                }
            }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let l = (0, i.findClosestQuality)(a, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`
    }
    o.__next_img_default = !0;
    let a = o
}, 90785, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let i = e.r(70363);

    function n(e, t) {
        let r = (0, i.useRef)(null),
            n = (0, i.useRef)(null);
        return (0, i.useCallback)(i => {
            if (null === i) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = o(e, i)), t && (n.current = o(t, i))
        }, [e, t])
    }

    function o(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 42652, (e, t, r) => {
    "use strict";
    e.i(92014), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return j
        }
    });
    let i = e.r(36437),
        n = e.r(56421),
        o = e.r(28562),
        a = n._(e.r(70363)),
        s = i._(e.r(93281)),
        l = i._(e.r(96146)),
        c = e.r(95553),
        d = e.r(7561),
        u = e.r(12588),
        p = e.r(14122),
        f = i._(e.r(85224)),
        m = e.r(90785),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, i, n, o, a) {
        let s = e ? .src;
        e && e["data-loaded-src"] !== s && (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let i = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => i,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            i = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                i ? .current && i.current(e)
            }
        }))
    }

    function b(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = "u" < typeof window ? a.useEffect : a.useLayoutEffect,
        y = (0, a.forwardRef)(({
            src: e,
            srcSet: t,
            sizes: r,
            height: i,
            width: n,
            decoding: s,
            className: l,
            style: c,
            fetchPriority: d,
            placeholder: u,
            loading: p,
            unoptimized: f,
            fill: g,
            onLoadRef: y,
            onLoadingCompleteRef: x,
            setBlurComplete: j,
            setShowAltText: w,
            sizesInput: _,
            onLoad: E,
            onError: P,
            ...C
        }, S) => {
            let O = (0, a.useRef)(!1),
                R = (0, a.useRef)(null);
            v(() => {
                let {
                    current: e
                } = O, {
                    current: t
                } = R;
                e || null === t || (P && (t.src = t.src), t.complete && h(t, u, y, x, j, f, _), O.current = !0)
            }, [e, u, y, x, P, f, _]);
            let k = (0, m.useMergedRef)(S, R);
            return (0, o.jsx)("img", { ...C,
                ...b(d),
                loading: p,
                width: n,
                height: i,
                decoding: s,
                "data-nimg": g ? "fill" : "1",
                className: l,
                style: c,
                sizes: r,
                srcSet: t,
                src: e,
                ref: k,
                onLoad: e => {
                    h(e.currentTarget, u, y, x, j, f, _)
                },
                onError: e => {
                    w(!0), "empty" !== u && j(!0), P && P(e)
                }
            })
        });

    function x({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...b(t.fetchPriority)
        };
        return e && s.default.preload ? (s.default.preload(t.src, r), null) : (0, o.jsx)(l.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let j = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(p.RouterContext),
            i = (0, a.useContext)(u.ImageConfigContext),
            n = (0, a.useMemo)(() => {
                let e = g || i || d.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "u" < typeof window ? i ? .localPatterns : e.localPatterns
                }
            }, [i]),
            {
                onLoad: s,
                onLoadingComplete: l
            } = e,
            m = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
            m.current = s
        }, [s]);
        let h = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
            h.current = l
        }, [l]);
        let [b, v] = (0, a.useState)(!1), [j, w] = (0, a.useState)(!1), {
            props: _,
            meta: E
        } = (0, c.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: b,
            showAltText: j
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(y, { ..._,
                unoptimized: E.unoptimized,
                placeholder: E.placeholder,
                fill: E.fill,
                onLoadRef: m,
                onLoadingCompleteRef: h,
                setBlurComplete: v,
                setShowAltText: w,
                sizesInput: e.sizes,
                ref: t
            }), E.preload ? (0, o.jsx)(x, {
                isAppRouter: !r,
                imgAttributes: _
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 99608, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let i = e.r(70363),
        n = "u" < typeof window,
        o = n ? () => {} : i.useLayoutEffect,
        a = n ? () => {} : i.useEffect;

    function s(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function s() {
            if (t && t.mountedInstances) {
                let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), s()), o(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), o(() => (t && (t._pendingUpdate = s), () => {
            t && (t._pendingUpdate = s)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}]);