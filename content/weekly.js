const data = [
    {
        id: '11',
        date: 'February 5, 2020',
        description: "You Don't know JS Yet, Vanilla Web Projects, 24 modern ES6 code snippets and more...",
        items: [{
            title:"You Don't Know JS Yet",
            description:"The 2nd edition of the book series is out. Definetly woth to check it out.",
            link:"https://github.com/getify/You-Dont-Know-JS",
            image:"https://d2sofvawe08yqg.cloudfront.net/ydkjsy-get-started/hero",
        },{
            title:"Vanilla Web Projects",
            description:"A list of 20 projects by Brad Traversy, which are build without frameworks or libraries.",
            link:"https://github.com/bradtraversy/vanillawebprojects",
            image:"https://vanillawebprojects.com/img/showcase-bg.png",
        },{
            title:"ESLint configuration and best practices",
            description:"A nice post by Lucas Santoni about the best practices of eslint.",
            link:"https://blog.geographer.fr/eslint-guide",
            image:"/weekly/screenshots/eslintbestpractices.png",
        },{
            title:"24 modern ES6 code snippets to solve practical JS problems",
            description:"A cool collection of snippets by Madza on dev.to.",
            link:"https://dev.to/madarsbiss/20-modern-es6-snippets-to-solve-practical-js-problems-3n83",
            image:"https://res.cloudinary.com/practicaldev/image/fetch/s--BNwgWQjz--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/jxfae4q7i6kbewhxzmzh.png"
        },{
            title:"iHateRegex",
            description:"A list of commonly used regular expressions - a usefull cheatsheet.",
            link:"https://ihateregex.io/",
            image:"https://ihateregex.io/_nuxt/img/4505636.png",
        },{
            title:"Image Dragging Effects",
            description:"A set of cool dragging effects by Mary Lou from Codrops.",
            link:"https://tympanus.net/codrops/2020/02/03/image-dragging-effects/",
            image:"https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2020/02/ImageDragging_featured.jpg",
        },{
            title:"Old CSS, new CSS",
            description:"A good read about how CSS used to work and where we are now.",
            link:"https://eev.ee/blog/2020/02/01/old-css-new-css/",
            image:"https://eev.ee/media/2020-02-css/html-definitive-guide.png",
        },{
            title:"Scene.js",
            description:"An animation library. for creatin animated websites.",
            link:"https://daybrush.com/scenejs/",
            image:"https://camo.githubusercontent.com/1181b993f880616d54cefc3b8ef576513f53a127/68747470733a2f2f64617962727573682e636f6d2f7363656e656a732f696d616765732f636c6170706572626f6172642e706e67"
        },{
            title:"CesiumJS",
            description:"An open source JavaScript library for creating 3D globes and maps.",
            link:"https://cesium.com/cesiumjs/",
            image:"https://cesium.com/images/social-card.jpg",
        },{
            title:"React Kawaii",
            description:"A library of cute illustrations, which are also easily customisable.",
            link:"https://react-kawaii.now.sh/",
            image:"/weekly/screenshots/reactkawaii.png",
        },{
            title:"Intrinsic Sizing In CSS",
            description:"An article by Ahmad Shadeed about extrinsic and intrisic sizing.",
            link:"https://ishadeed.com/article/intrinsic-sizing-in-css/",
            image:"https://ishadeed.com/assets/intrinsic-sizing/intrinsic-todo-3.png",
        }]
    },
    {
        id: '10',
        date: 'January 29, 2020',
        description: 'Hoard.fyi, Screen Size Map, Mirage JS, Stock Resources, Vuer, React Libraries and more...',
        items: [{
            title:"Hoard.fyi",
            description:"A large list of tools and resources for web developers and designers.",
            link:"https://hoard.fyi/",
            image:"https://hoard.fyi/wp-content/uploads/2019/10/cropped-hoard.fyi_-5.png",
        },{
            title:"Screen Size Map",
            description:"An interactive map of the most popular screen sizes.",
            link:"https://www.screensizemap.com/",
            image:"https://screensizemap.com/img/open-graph/og-square.png",
        },{
            title:"Mirage JS",
            description:"An API mocking library to help you build your frontend without having the backend.",
            link:"https://miragejs.com/",
            image:"https://miragejs.com/static/121685b2895428a7030b3ec4e6d86d73/06961/media-card.png",
        },{
            title:"Awesome Stock Resources",
            description:"A huge list of stock resources, including photography, videos, fonts icons and more.",
            link:"https://github.com/neutraltone/awesome-stock-resources",
            image:"https://raw.githubusercontent.com/neutraltone/awesome-stock-resources/master/img/splash.jpg",
        },{
            title:"Vuer",
            description:"A simple GitHub profile viewing tool, made by Cade Kyanston with Vue, Chart.js and Bulma.",
            link:"https://vuer.now.sh/",
            image:"https://vuer.now.sh/img/snapshot.png",
        },{
            title:"React Libraries",
            description:"A curated database of popular React libraries.",
            link:"https://reactlibraries.com/",
            image:"https://reactlibraries.com/_next/static/images/react-libraries-logo-icon-only-f0880ce847aac1d0a394fd14657a1e34.png",
        },{
            title:"Rough.js",
            description:"A small graphics library for drawing sketchy images with canvas or svg.",
            link:"https://github.com/pshihn/rough",
            image:"https://camo.githubusercontent.com/321c5ec903de912560670ba0fb8d6b7705a2a4e5/68747470733a2f2f726f7567686a732e636f6d2f696d616765732f6361705f64656d6f2e706e67"
        },{
            title:"IsometricSass",
            description:"A sass library for isometric animations.",
            link:"https://morgancaron.github.io/IsometricSass/",
            image:"https://raw.githubusercontent.com/MorganCaron/IsometricSass/master/screenshot.png",
        },{
            title:"The Complete Freelance Web Developer Guide",
            description:"A detailed article by Luke Ciciliano how to make money through freelancing.",
            link:"https://www.freecodecamp.org/news/freelance-web-developer-guide/",
            image:"https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/Hit-with-money.jpg",
        },{
            title:"Dark Reader",
            description:"A chorme and firefox extension to add a dark mode to any website.",
            link:"https://github.com/darkreader/darkreader",
            image:"https://camo.githubusercontent.com/619d18806e7578dc4bb675e7a847ff8d42364294/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f74544a4949494171664a57796d71504d394c416d69766c31316b576d462d58584c4142756573344f77666a4f45445f6e74734a5a644c5930565447305846435730575f7759536c6c37513d773634302d683430302d65333635"
        },{
            title:"Introducing Yarn 2",
            description:"An article by Maël Nison about the release of the new yarn version.",
            link:"https://dev.to/arcanis/introducing-yarn-2-4eh1",
            image:"https://dev.to/social_previews/article/227676.png",
        }]
    },
    {
        id: '9',
        date: 'January 22, 2020',
        description: 'Hero Patterns, Tiny Helpers, GoatCounter, is-website-vulnerable, JamTemplates and more...',
        items: [{
            title:"Hero Patterns",
            description:"A cool collection of repeatable SVG pattern backgrounds by Steve Schoger.",
            link:"https://www.heropatterns.com",
            image:"https://www.heropatterns.com/img/twitter-preview.png",
        },{
            title:"Tiny Helpers",
            description:"A collection of free tools for web developers.",
            link:"https://tiny-helpers.dev",
            image:"https://tiny-helpers.dev/large-media-image.jpg",
        },{
            title:"GoatCounter",
            description:"Simple, open source and privacy aware web statistics.",
            link:"https://www.goatcounter.com",
            image:"https://gc.zgo.at/screenshot.png",
        },{
            title:"is-website-vulnerable",
            description:"A cli tool to find vulnerabilities in your website npm wouldn't find.",
            link:"https://github.com/lirantal/is-website-vulnerable",
            image:"https://raw.githubusercontent.com/lirantal/is-website-vulnerable/master/.github/is-website-vulnerable-logo.png",
        },{
            title:"JamTemplates",
            description:"A curated collection of free Gatsby templates.",
            link:"https://jamtemplates.com/",
            image:"https://jamtemplates.com/static/social-300826671967cbacd95e5e63623d190f.jpg",
        },{
            title:"CSS Gradient Animator",
            description:"A website to generate an animated gradient background.",
            link:"https://www.gradient-animator.com/",
            image:"https://www.gradient-animator.com/img/screen.png",
        },{
            title:"ImageHues",
            description:"Get generated color palettes from random images.",
            link:"https://imagehues.com/",
            image:"https://ph-files.imgix.net/7d42e9a0-9d69-4393-a1aa-de02bf832680?",
        },{
            title:"30 seconds of code",
            description:"A collection of short code snippets for JavaScript, CSS, Python and React.",
            link:"https://www.30secondsofcode.org/",
            image:"https://www.30secondsofcode.org/static/logo-cb53e02c026a68cd4a2574f40168073c.png",
        },{
            title:"Proton Native",
            description:"Create cross-platform desktop applications with React syntax.",
            link:"https://proton-native.js.org/#/",
            image:"https://camo.githubusercontent.com/c730125da08fdf1e78595c891449933616e566d5/687474703a2f2f70726f746f6e6e61746976652d616635312e6b7863646e2e636f6d2f696d616765732f6c6f676f5f626c61636b2e7376673f",
        },{
            title:"Next.js 9.2",
            description:"Read about the latest release of Next.js and it's new features.",
            link:"https://nextjs.org/blog/next-9-2",
            image:"https://nextjs.org/static/blog/next-9-2/twitter-card.png",
        }]
    },
    {
        id: '8',
        date: 'January 15, 2020',
        description: 'Gradient Magic, Broot, cacolor.co, stencils, 23 VS Code Shortcuts, Craft.js and more...',
        items: [{
            title:"Gradient Magic",
            description:"A huge collection of beautiful css gradients.",
            link:"https://www.gradientmagic.com/",
            image:"/weekly/screenshots/gradientmagic.jpg",
        },{
            title:"Broot",
            description:"A cool cli to get a better overview of directories.",
            link:"https://dystroy.org/broot/",
            image:"https://dystroy.org/broot/img/20191112-overview.png",
        },{
            title:"cacolor.co",
            description:"A good way to manage and share color palettes.",
            link:"https://calcolor.co/",
            image:"https://calcolor.co/assets/img/preview.png",
        },{
            title:"Stencil",
            description:"A toolchain to build web components that run in every browser.",
            link:"https://stenciljs.com/",
            image:"/weekly/screenshots/stencil.jpg",
        },{
            title:"23 lesser known VS Code Shortcuts as GIF",
            description:"A nice article by Andreas Müller about useful shortcuts for VS Code.",
            link:"https://dev.to/devmount/23-lesser-known-vs-code-shortcuts-as-gif-80",
            image:"https://res.cloudinary.com/practicaldev/image/fetch/s--Wyiuef-E--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--b5JXyKSp--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/q7q5tlmm008s28c9r4f6.gif",
        },{
            title:"Craft.js",
            description:"This is a library to create your own page editor. It comes with a drag-n-drop system and handles the way user components should be rendered, updated and moved.",
            link:"https://github.com/prevwong/craft.js",
            image:"https://user-images.githubusercontent.com/16416929/72202590-4d05f500-349c-11ea-9e43-1da1cb0c30e9.gif",
        },{
            title:"CSS-Only Carousel",
            description:"A good article how to create a carousel with only CSS by Chris Coyier.",
            link:"https://css-tricks.com/css-only-carousel/",
            image:"https://css-tricks.com/wp-content/uploads/2019/12/carousel-slides.png",
        },{
            title:"How to move your project to TypeScript - at your own pace",
            description:"A guide how to move your project to Typescript.",
            link:"https://www.twilio.com/blog/move-to-typescript",
            image:"https://twilio-cms-prod.s3.amazonaws.com/images/1jt1K6xUWs_YCZZo-BiSoNeAAbFzm-dUb-BTx3VtEzJvDZ.width-808.png",
        }]
    },
    {
        id: '7',
        date: 'January 08, 2020',
        description: 'Oh Shit, Git!?!, Colorsinspo, Parcel, Redux Style Guite, Bot Land, Rhubarb and more...',
        items: [{
            title:"Oh Shit Git!?!",
            description:"It's easy to screw up using Git. This website helps you figuring out how to fix your mistakes.",
            link:"https://ohshitgit.com/",
            image:"/weekly/screenshots/ohshitgit.jpg",
        },{
            title:"Colorsinspo",
            description:"A cool website around colors - including palettes, tools, gradients, inspiration, tutorials and more.",
            link:"https://colorsinspo.com/",
            image:"https://colorsinspo.com/resources/img/twitter/colorsinspo-twitter-sumary-image.png",
        },{
            title:"Parcel",
            description:"A faster alternative to webpack for web application bundling.",
            link:"https://parceljs.org/",
            image:"https://user-images.githubusercontent.com/19409/31321658-f6aed0f2-ac3d-11e7-8100-1587e676e0ec.png"
        },{
            title:"Redux Style Guide",
            description:"The new list of recommended patterns, best practices, and suggested approaches for writing Redux applications.",
            link:"https://redux.js.org/style-guide/style-guide/",
            image:"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
        },{
            title:"Beautiful React Hooks",
            description:"A collection of React Hooks to speed-up the development.",
            link:"https://github.com/antonioru/beautiful-react-hooks",
            image:"https://raw.githubusercontent.com/antonioru/beautiful-react-hooks/master/usage_example.png",
        },{
            title:"Bot Land",
            description:"A fun online strategy game, where you have to build and programm your own bot.",
            link:"https://bot.land/",
            image:"https://bot.land/dist/logo.png",
        },{
            title:"Rhubarb",
            description:"A lightweight WebSocket library optimized for multiplayer JS games, which works on WebWorkers with binary data.",
            link:"https://github.com/oguzeroglu/Rhubarb",
            image:"https://raw.githubusercontent.com/oguzeroglu/Rhubarb/master/rhubarb.gif",
        },{
            title:"DarkModeDesign",
            description:"A list of resources for designing and building dark mode experiences.",
            link:"https://darkmodedesign.xyz",
            image:"/weekly/screenshots/darkmodedesign.jpg",
        },{
            title:"astuto",
            description:"An open source customer feedback tool, helping to collect, manage and prioritize feedback from users.",
            link:"https://github.com/riggraz/astuto",
            image:"https://raw.githubusercontent.com/riggraz/astuto/master/images/logo-and-name.png",
        }]
    },
    {
        id: '6',
        date: 'January 01, 2020',
        description: 'Just JavaScript, CHL.LI, CoreUI Icons, Convert2Svg, Generative Placeholders and more...',
        items: [{
            title:"Just JavaScript",
            description:"A new email course by Dan Abramov about the JavaScript Mental Models he uses.",
            link:"https://justjavascript.com/",
            image:"/weekly/screenshots/justjavascript.jpg",
        },{
            title:"CHL.LI",
            description:"A simple, modern, free and privacy-friendly URL shortener.",
            link:"https://chl.li/",
            image:"/weekly/screenshots/chlli.jpg",
        },{
            title:"CoreUI Icons",
            description:"1500+ simply beautiful open source icons in multiple formats SVG, PNG, and Webfonts.",
            link:"https://github.com/coreui/coreui-icons/tree/1.0.0",
            image:"https://camo.githubusercontent.com/6b9a71a7be4404bf82449d16e82b200b1e7e691d/68747470733a2f2f636f726575692e696f2f696d616765732f69636f6e735f667265655f62675f7365742e706e67",
        },{
            title:"Convert2Svg",
            description:"A free and open-source tool to easily transform any image or photo into a multi colored svg vector file",
            link:"https://convert2svg.com/",
            image:"https://convert2svg.com/preview.jpg",
            selfPromoted:"New Resource"
        },{
            title:"Generative Placeholders",
            description:"Use generative art for your placeholder images.",
            link:"https://generative-placeholders.glitch.me/",
            image:"https://generative-placeholders.glitch.me/image?width:400&height:300",
        },{
            title:"Accessibility tools for designers and developers",
            description:"A nice article by Lisa Dziuba about accessibility and tools to test it.",
            link:"https://uxdesign.cc/accessibility-tools-for-designers-and-developers-ea400a415c0a",
            image:"https://miro.medium.com/max/4000/1*v91ZxZxDtnXpU72vDvYaJg.png",
        },{
            title:"massCode",
            description:"A free and open source code snippets manager for developers.",
            link:"https://github.com/antonreshetov/massCode",
            image:"https://raw.githubusercontent.com/antonreshetov/massCode/master/logo.png",
        }]
    },
    {
        id: '5',
        date: 'December 25, 2019',
        description: 'Codepen Most Hearted 2019, V 8.0, lazy-simon.js, GitHub Apps and more...',
        introText: <p>
            Because of holiday and christmas, this weekly and the next one will be a little smaller :)
        </p>,
        items: [{
            title:"The Most Hearted Of 2019",
            description:"The most popular Pens from the year 2019 of Codepen. Definitely worth checking out.",
            link:"https://codepen.io/2019/popular/pens",
            image:"/weekly/screenshots/codepen2019.png"
        },{
            title:"V 8.0 Release",
            description:"V8 is Google’s open source high-performance JavaScript and WebAssembly engine. It is used in Chrome and in Node.js, among others.",
            link:"https://v8.dev/blog/v8-release-80",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/V8_JavaScript_engine_logo_2.svg/512px-V8_JavaScript_engine_logo_2.svg.png",
        },{
            title:"lazy-simon.js",
            description:"A tiny JavaScript library to lazy load all <img> on your website, by Simon Frey.",
            link:"https://lazy.simon-frey.eu/",
            image:"https://lazy.simon-frey.eu/img/social.jpg",
        },{
            title:"Top GitHub Apps You Should Know About",
            description:"A few, effective GitHub apps for your workflow.",
            link:"https://devops.substack.com/p/top-github-apps-you-should-know-about",
            image:"https://res.cloudinary.com/hhsslviub/image/fetch/h_600/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F035344f5-d6ab-4d1f-85c6-c9484510719e_4032x1960.jpeg",
        },{
            title:"What Is JavaScript Made Of?",
            description:"An interesting read by Dan Abramov about the details of Javascript.",
            link:"https://overreacted.io/what-is-javascript-made-of/",
            image:"/weekly/screenshots/whatisjavascriptmadeof.png",
        },{
            title:"Replacing Redux with observables and React Hooks",
            description:"A good read how (and why) Simon Trény got rid of Redux with observables and React Hooks.",
            link:"https://blog.betomorrow.com/replacing-redux-with-observables-and-react-hooks-acdbbaf5ba80",
            image:"https://miro.medium.com/max/3200/1*mgGAjZDWMu1OnvGyTvbSYw@2x.png",
        }]
    },
    {
        id: '4',
        date: 'December 18, 2019',
        description: 'Nedux, New CSS “:is()”, Challenging projects, musicForProgramming, No to Chrome and more...',
        items: [{
            title:"Nedux",
            description:"A simplified version of redux. You don't have to create actions & reduces, just the store.",
            link:"https://github.com/lucasmrdt/nedux",
            image:"/weekly/screenshots/nedux.jpg",
        },
        {
            title:"How to Use New CSS “:is()” for Easy Element Targeting",
            description:'A nice article by tutspoint, about the usage of the new CSS ":is()".',
            link:"https://webdesign.tutsplus.com/articles/new-css-is-for-easy-element-targeting--cms-34223",
            image:"https://cms-assets.tutsplus.com/uploads/users/30/posts/34223/image/is.jpg",
        },
        {
            title:"Challenging projects every programmer should try",
            description:"A list of projects to get started, when you're learning a new programming language or framework.",
            link:"https://web.eecs.utk.edu/~azh/blog/challengingprojects.html",
            image:"https://web.eecs.utk.edu/~azh/blog/images/peaybasic.png",
        },
        {
            title:"Things end users care about but programmers don't",
            description:'A list if things that end users would often like to see.',
            link:"https://instadeq.com/blog/posts/things-end-users-care-about-but-programmers-dont/",
            image:"/weekly/screenshots/enduserscare.jpg",
        },
        {
            title:"musicForProgramming",
            description:'57 hours of non disturbing music to help you concentrate.',
            link:"https://musicforprogramming.net/",
            image:"/weekly/screenshots/musicforprogramming.jpg",
        },
        {
            title:"20 ways to become a better Node.js developer in 2020",
            description:'A good read by Yoni Goldberg skills, technologies and considerations for Node.js in 2020.',
            link:"https://medium.com/@me_37286/20-ways-to-become-a-better-node-js-developer-in-2020-d6bd73fcf424",
            image:"https://miro.medium.com/max/2114/1*PYBhcIuCopivLOiBBvG0cw.png",
        },
        {
            title:"No to Chrome",
            description:"They are raising awareness of how Google is shaping the internet, your present and future for its own ends.",
            link:"https://notochrome.org/",
            image:"https://notochrome.org/wp-content/NTC-twitter-blue-big-1200x676.jpg",
        },
        {
            title:"A Curated List Of Websites For Free SVG Illustrations",
            description:"A list of websites for free SVG icons, I've gather thoughout the years.",
            link:"https://wweb.dev/resources/free-svg-illustrations",
            image:"https://wweb.dev/blog/5/preview.jpg",
            selfPromoted:"New Resource",
        }]
    },
    {
        id: '3',
        date: 'December 11, 2019',
        description: 'Self Hosted, CSS Layout, Refactoring UI, Deep Sea, react-spring, Leonardo and more...',
        items: [{
            title:"Self Hosted",
            description:" An extensive searchable list of the best self hosted software developers.",
            link:"https://selfhostedsource.tech/self-hosted",
            image:"/weekly/screenshots/selfhosted.jpg",
        },
        {
            title:"CSS Layout",
            description:"A collection of popular layouts and patterns made with CSS.",
            link:"https://csslayout.io/",
            image:"/weekly/screenshots/csslayouts.jpg",
        },
        {
            title:"Labels are a last resort",
            description:"A good guide by the people of Refactorig UI about the usage of labels in UI.",
            link:"https://refactoringui.com/previews/labels-are-a-last-resort/",
            image:"https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/previews/labels-are-a-last-resort-04.png",
        },
        {
            title:"Deep Sea",
            description:"A really cool demo by Neal Agarwal. It's also totally worth to check out his other stuff!",
            link:"https://neal.fun/deep-sea/",
            image:"https://neal.fun/thumbnails/deep-sea.png",
        },{
            title:"react-spring",
            description:" A simple, spring-physics based animation library that should cover most of your UI related animation.",
            link:"https://www.react-spring.io/",
            image:"https://www.react-spring.io/share.jpg",
        },{
            title:"Leonardo",
            description:"A colors generator based on a desired contrast ratio for beautiful, accessible, and adaptive color systems.",
            link:"https://leonardocolor.io/",
            image:"https://miro.medium.com/max/5636/1*rmcnZeNiITkATulEGyMZOA@2x.png",
        },{
            title:"CSS: An Art, a Science, a Nightmare",
            description:"An in depth article about CSS by Tania Rascia for people who have had to touch CSS a few times but ultimately don't feel like they know what they're doing, or struggle with making basic layouts.",
            link:"https://www.taniarascia.com/overview-of-css-concepts",
            image:"https://www.taniarascia.com/static/fe910b03d4eeaf5767dc54e99c7337c8/4148e/css2.png",
        },{
            title:"Responsive Image Breakpoints Generator",
            description:"Easily generate the optimal responsive image dimensions.",
            link:"https://responsivebreakpoints.com/",
            image:"https://responsivebreakpoints.com/images/responsive_breakpoints_logo_square.png",
        },{
            title:"The State of UX in 2020",
            description:"From the tools we'll use, to our process, to the behaviors that will change the way we design — here's a list of what to expect for User Experience (UX) Design in the next year.",
            link:"https://trends.uxdesign.cc/",
            image:"https://images.squarespace-cdn.com/content/59ebb4b3cd39c3e3ae4822d5/1573932505917-2HL1P165FP6K1Y906POI/Social.jpg",
        },{
            title:"6 GitHub Repos For Instant Knowledge Boost",
            description:"Mirosław Farajewicz lists a bunch of smaller and more single-subject repositories.",
            link:"https://dev.to/mfarajewicz/6-github-repos-for-instant-knowledge-boost-3mo0",
            image:"https://res.cloudinary.com/practicaldev/image/fetch/s--0oew9f0c--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--rV1qmRbb--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/6t9lakxmowneulfyvokg.jpg",
        }]
    },
    {
        id: '2',
        date: 'December 04, 2019',
        description: 'Bootstrap Icons, SVG Landscapes, roughViz.js, JavaScript Christmas, Curlie, Cell and more..',
        items: [{
            title:"Bootstrap Icons",
            description:"Bootstrap is releasing Icons their very first icon set that’s designed entirely by their team. It's open sourced for everyone to use, with or without Bootstrap.",
            link:"https://blog.getbootstrap.com/2019/11/26/bootstrap-icons/",
            image:"https://blog.getbootstrap.com/assets/img/bootstrap-social.png",
        },{
            title:"Procedurally Generated SVG Landscapes",
            description:"Kevin Wang wrote this great article how to create a generator for beautiful landscape svgs.",
            link:"https://kwa.ng/procedurally-generated-svg-landscapes/",
            image:"https://kwa.ng/static/4922c522dbd60d5f4a14cbd0e0b48f95/2d017/confidence-gap-adam-eastburn.jpg",
        },{
            title:"JavaScript Christmas",
            description:"A few days late, but this is a advent calendar with 24 days of articles about JavaScript.",
            link:"https://javascript.christmas/",
            image:"https://cdn.jsdelivr.net/gh/kgolid/lukebilder@2cec035/11/tre.png",
        },{
            title:"roughViz.js",
            description:"A nice JavaScript library for creating sketchy/hand-drawn styled charts.",
            link:"https://github.com/jwilber/roughViz",
            image:"https://raw.githubusercontent.com/jwilber/random_data/master/roughViz_Title.png",
        },{
            title:"Curlie",
            description:"Curlie is a command line HTTP client simliar to HTTPie, but with the features of curl.",
            link:"https://curlie.io/",
            image:"https://curlie.io/doc/get.png",
        },{
            title:"Cell",
            description:"A CSS naming convention similar to BEM, but using Sass.",
            link:"https://github.com/One-Nexus/Cell",
            image:"https://camo.githubusercontent.com/d39657f9c535590620b3139de5af96a9058b8362/687474703a2f2f6f6e656e657875732e696f2f63656c6c2f696d616765732f63656c6c2d6c6f676f2e706e67",
        },{
            title:"Checklist to avoid the most common accessibility errors",
            description:"A nice article by Bruce Lawson about the most common accessibility errors and how to avoid them.",
            link:"https://www.brucelawson.co.uk/2019/checklist-to-avoid-the-most-common-accessibility-errors/",
            image:"https://www.brucelawson.co.uk/wp-content/themes/HTML5/images/coast-icon.png",
        },{
            title:"Button - Press for knowledge",
            description:"An in-depth anatomy of Buttons.",
            link:"https://rgb.wiki/button",
            image:"https://images.ctfassets.net/1o0msnomnlhl/3Skv8769tmFYMr5b46dd3y/b76a8baf03d46804d536cf0129070f1b/button.png",
        },{
            title:"Lighthouse CI",
            description:"A possiblity to integrate Lighthouse into your CI, viewing the changes, and preventing regressions.",
            link:"https://github.com/GoogleChrome/lighthouse-ci",
            image:"https://user-images.githubusercontent.com/39191/68522269-7917b680-025e-11ea-8d96-2774c0a0b04c.png",
        },{
            title:"Making a Better Custom Select Element",
            description:"An interesting article by Julie Grundy how to make a custom select element accessible.",
            link:"https://24ways.org/2019/making-a-better-custom-select-element/?ref:resoource.com",
            image:"https://cloud.24ways.org/2019/sharing/making-a-better-custom-select-element.png",
        }]
    },
    {
        id: '1',
        date: 'November 27, 2019',
        description: 'SWR, Fresh Folk, Colors & fonts, Animated CSS Backgrounds, Postwoman, Pika and more',
        introText: <div>
            <p>Today I'm introducing the weekly. This will be a curated list of things I stumbled upon during the previous week.</p>
            <p>
                I'm reading through lots of various forums and websites related to web development.
                Starting from now I will save the (for me) most interesting resources, tools and reads and will share them here.
            </p>
            <p>
                If you have somthing, you think I should mention here, let me know: <a href="mailto:info@wweb.dev">info@wweb.dev</a>
            </p>
        </div>,
        items: [{
            title: "SWR - React Hooks for Remote Data Fetching",
            description: "A lightweight library for remote data fetching using React Hooks. It returns the data from cache, then sends the fetch request and finally comes with the up-to-date data again.",
            link: "https://swr.now.sh/",
            image: "https://assets.zeit.co/image/upload/v1572282926/swr/twitter-card.jpg"
        },{
            title: "Colors, fonts and resources for web developers",
            description: "Curated library of colors and fonts for Web Developers & Digital Designers and a curated collection of resources.",
            link: "https://www.colorsandfonts.com/",
            image: "https://colorsandfonts.com/images/opengraph.png"
        },{
            title: "Animated CSS Background Generator",
            description: "A collection of pure css animated backgrounds with the possibility to customize.",
            link: "/resources/animated-css-background-generator",
            image: "/resources/resources01-small.jpg",
            selfPromoted: "self-promotion",
        },{
            title: "Fresh Folk - An illustration library of people and objects",
            description: "Each character comes with a range of poses, outfits and skin tones. Create a wide range of scenes with 43 Objects to choose from.",
            link: "https://fresh-folk.com/",
            image: "https://fresh-folk.com/assets/images/card.jpg"
        },{
            title: "Divjoy - The React codebase generator",
            description: "A nice templete generator including marketing pages, contact forms, pricing, faq, authentication and routing.",
            link: "https://divjoy.com/",
            image: "https://divjoy.com/static/og-image-new.png"
        },{
            title:"Postwoman - An API request builder",
            description:"A free, fast, and beautiful alternative to Postman.",
            link:"https://github.com/liyasthomas/postwoman",
            image:"https://postwoman.io/logo.jpg",
        },{
            title:"Pika - A new kind of package registry for the modern web.",
            description:"It handles formatting, configuring, building and publishing every package on the registry, so that individual authors don't have to.",
            link:"https://www.pika.dev/registry",
            image:"https://www.pika.dev/static/img/registry-cover.jpg"
        },{
            title:"Developer Roadmaps",
            description:"Step by step guides and paths to learn different tools or technologies.",
            link:"https://roadmap.sh/roadmaps",
            image:"https://roadmap.sh/brand-square.png",
        },{
            title:"Firefox Developer Tools Tips & Tricks",
            description:"Curated series of 30 productivity tips and tricks that helps debugging web applications with the Firefox Developer Tools.",
            link:"https://medium.com/@lakatos/30-tips-tricks-with-the-firefox-developer-tools-2e3f2ca5bc61",
            image:"https://miro.medium.com/max/1200/1*eN9nIfutJQUr5kdznmEHDQ.png",
        },{
            title:"Free for developers",
            description:"A list of software (SaaS, PaaS, IaaS, etc.) and other offerings that have free tiers for developers.",
            link:"https://free-for.dev/#/",
            image:"",
        }]
    }
]

export default data
