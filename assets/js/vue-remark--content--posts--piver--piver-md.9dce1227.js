(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},XdlT:function(e,t,o){"use strict";o.r(t);var r=o("KHd+"),n=o("UQSp"),a=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:o[e]=function(){return i[e]}}))},h=a.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",u={excerpt:null,title:"Piver - The strangest versioning system that's actually used",link:"piver",description:"You've heard of semver. You might have heard of zero ver. But what about piver?",date:"2023-12-17T00:00:00.000Z",timeToRead:4,published:!0,unlisted:!1,thumbnail:"./thumbnail.png",tags:["Programming"]};var d=function(e){e.options[f]&&(e.options[f]=u),a.a.util.defineReactive(e.options,f,u),e.options.computed=h.computed({$frontmatter:function(){return e.options[f]}},e.options.computed)},p=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("You've heard of semver. You've heard of calver. But what about piver"),o("sup",{attrs:{id:"fnref-1"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-1"}},[e._v("1")])]),e._v("?")]),o("p",[e._v("For any versioning system to work, it needs to increase as new version are released. So in theory, instead of going from v1 to v2, you could go v1 -> v1.2 -> v1.23 -> v1.234 -> v1.2345 and so on. \nNow this wouldn't be a good versioning system and it's definitely not scalable, but it works.")]),o("p",[e._v("Now imagine a system where instead of simply counting up the digits in numerical order, you instead chose to go by the digits of pi. And imagine if that system was used by a piece of software that was being used by millions of people around the world - you've probably even heard of it. It's called TeX.")]),o("p",[e._v("You're probably in one of two camps right now. Either you've heard of this fact before and it's nothing new. Or you're like me and wondering all sorts of questions. For example:")]),o("h4",{attrs:{id:"1-did-it-start-of-like-this-or-did-this-versioning-system-emerge-sometime-after-the-initial-release"}},[o("a",{attrs:{href:"#1-did-it-start-of-like-this-or-did-this-versioning-system-emerge-sometime-after-the-initial-release","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("1. Did it start of like this or did this versioning system emerge sometime after the initial release?")]),o("p",[e._v("There is no comprehensive list of TeX versions"),o("sup",{attrs:{id:"fnref-2"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-2"}},[e._v("2")])]),e._v(" however it seems that after envisioning the idea for TeX in 1977, Donald Knuth released the first version called TeX82 in 1982. And then the next version of TeX with breaking changes"),o("sup",{attrs:{id:"fnref-3"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-3"}},[e._v("3")])]),e._v(" was called TeX90 (I wonder when this was released). At this point, the version number 3.0 was assigned and it was decided that future versions of TeX would asymptotically approach the value of pi, digit by digit.")]),o("h4",{attrs:{id:"2-how-does-this-work-with-other-pieces-of-software-like-github"}},[o("a",{attrs:{href:"#2-how-does-this-work-with-other-pieces-of-software-like-github","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("2. How does this work with other pieces of software like Github?")]),o("p",[e._v("Github releases are based on git tags. So this system should work as long as it never exceeds the length limit of a git tag"),o("sup",{attrs:{id:"fnref-4"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-4"}},[e._v("4")])]),e._v(". In any case, it doesn't matter because TeX isn't hosted on Github. Most TeX packages that I can find are listed on "),o("a",{attrs:{href:"https://ctan.org/tex-archive",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("CTAN")]),e._v(" - the Comprehensive TeX Archive Network"),o("sup",{attrs:{id:"fnref-5"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-5"}},[e._v("5")])]),e._v(". The project predates Github by decades and will probably stay alive well past Github's shelf life.")]),o("h4",{attrs:{id:"3-what-version-is-tex-on-right-now"}},[o("a",{attrs:{href:"#3-what-version-is-tex-on-right-now","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("3. What version is TeX on right now?")]),o("p",[e._v("When I first found out that TeX was using piver, I assumed that, like a lot of software, it would have had hundreds of releases by now and the current version would be hundreds of digits long.")]),o("p",[e._v("But turns out, TeX is only on version "),o("a",{attrs:{href:"https://ctan.org/pkg/plain",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("3.141592653")]),e._v(".")]),o("p",[e._v("Bug reports are analyzed every few years and a new version is released thereafter. This has happened in 1992, 1993, 1995, 1998, 2002, 2007, 2013, and 2020"),o("sup",{attrs:{id:"fnref-6"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-6"}},[e._v("6")])]),e._v('. Following the pattern, the next change is expected in 2028 and the pattern will continue up until Donald Knuth\'s death, at which point, the final version of pi will be released, presumably indicating that the TeX has approached the asymptote and no future versions will be released. All bugs will becomes "features".')]),o("h4",{attrs:{id:"4-and-most-importantly-why"}},[o("a",{attrs:{href:"#4-and-most-importantly-why","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("4. and most importantly... Why?!")]),o("p",[e._v("Knuth says it best in the "),o("a",{attrs:{href:"https://tug.org/TUGboat/Articles/tb11-4/tb30knut.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("11:4 issue of TUGboat")])]),o("blockquote",[o("p",[e._v('"I strongly believe\nthat an unchanging system has great value, even\nthough it is axiomatic that any complex system can\nbe improved. Therefore I believe that it is unwise to\nmake further "improvements" to the systems called\nTeX and METAFONT. Let us regard these systems\nas fixed points, which should give the same results\n100 years from now that they produce today."')])]),o("p",[e._v("Originally I thought you'd have to be crazy to use a system like this, but after reading about it and learning the history of TeX, I realized that most software should actually strive to be more like it - instead of trying to do everything, solve a problem, solve it well, and try to make it compatible with other systems to enable extensibility without needing many future changes.")]),o("hr"),o("p",[e._v("A few other notably wacky versioning systems:")]),o("ul",[o("li",[o("strong",[e._v("e-ver")]),e._v(": (like piver but using e instead of pi). Used by Metafont (a companion to TeX, also developed by Donald Knuth) and it's currently on v2.71828182. Similar to TeX, after Knuth's death, the final version of e will be assigned and this will receive no further releases.")]),o("li",[o("strong",[o("a",{attrs:{href:"https://0ver.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("0ver")])]),e._v(": Not sure if this is to be taken seriously or not (given how widespread its usage is) but as the name suggests, in 0ver you never increment the major version and use 0.x.y.z.... forever.")]),o("li",[o("strong",[o("a",{attrs:{href:"https://archive.ph/NjRQl",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("SenVer")])]),o("sup",{attrs:{id:"fnref-7"}},[o("a",{staticClass:"footnote-ref",attrs:{href:"#fn-7"}},[e._v("7")])]),e._v(": Not to be confused with SemVer, SenVer stands for Sentimental Versioning - where you get to decide what the version means using a vibes based approach.")])]),o("p",[e._v("Appendix: If this interested you, you can read more about the history of TeX, as well as how all the different softwares interface on the TeX User Group communications. A few links to get you started:")]),o("ol",[o("li",[e._v("Overview of TeX, its children and their friends - Arno Trautmann: "),o("a",{attrs:{href:"https://github.com/alt/tex-overview/blob/master/tex-overview.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://github.com/alt/tex-overview/blob/master/tex-overview.pdf")])]),o("li",[e._v("LaTeX vs MiKTeX vs TeX: "),o("a",{attrs:{href:"https://tug.org/levels.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://tug.org/levels.html")])]),o("li",[e._v("TUGboat issues: "),o("a",{attrs:{href:"https://tug.org/TUGboat/contents.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://tug.org/TUGboat/contents.html")])]),o("li",[e._v("A list of errata/corrections written by Donald Knuth, dating back to 1989: "),o("a",{attrs:{href:"https://ctan.org/tex-archive/systems/knuth/dist/errata",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://ctan.org/tex-archive/systems/knuth/dist/errata")])]),o("li",[e._v("Tuneups to TeX and Metafont in "),o("a",{attrs:{href:"https://tug.org/TUGboat/tb29-2/tb92knut.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("2008")]),e._v(", "),o("a",{attrs:{href:"https://tug.org/TUGboat/tb35-1/tb109knut.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("2014")]),e._v(", and "),o("a",{attrs:{href:"https://tug.org/TUGboat/tb42-1/tb130knuth-tuneup21.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("2021")]),e._v(". Select communications between TeX implementers between 1987-1993 "),o("a",{attrs:{href:"https://ctan.org/pkg/tex-implementors",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(". ")])]),o("div",{staticClass:"footnotes"},[o("hr"),o("ol",[o("li",{attrs:{id:"fn-1"}},[e._v("piver isn't technically a real name. I made it up. I'm not sure this versioning system even has a real name."),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-1"}},[e._v("↩")])]),o("li",{attrs:{id:"fn-2"}},[e._v("You could probably make a comprehensive list by going through all the issues of the TUGboat collection "),o("a",{attrs:{href:"https://tug.org/TUGboat/contents.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v("."),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-2"}},[e._v("↩")])]),o("li",{attrs:{id:"fn-3"}},[e._v("The primary reason for a breaking change was in order to support larger 8-bit character sets that were common in Europe and Asia ("),o("a",{attrs:{href:"https://tug.org/TUGboat/Articles/tb10-3/tb25knut.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://tug.org/TUGboat/Articles/tb10-3/tb25knut.pdf")]),e._v("). Presumably if TeX had started with an 8-bit character set, there would never have been any breaking changes."),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-3"}},[e._v("↩")])]),o("li",{attrs:{id:"fn-4"}},[e._v("On my machine this is "),o("span",{staticStyle:{"word-wrap":"break-word"}},[e._v("3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190")]),e._v('. Any longer and I get an error "File name too long".'),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-4"}},[e._v("↩")])]),o("li",{attrs:{id:"fn-5"}},[e._v("Other TeX software however can be found on Github (with more sensible versioning systems). For example, LaTeX is released both on "),o("a",{attrs:{href:"https://ctan.org/pkg/latex",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("CTAN")]),e._v(" as well as "),o("a",{attrs:{href:"https://github.com/latex3",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Github")]),e._v("."),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-5"}},[e._v("↩")])]),o("li",{attrs:{id:"fn-6"}},[o("a",{attrs:{href:"https://www-cs-faculty.stanford.edu/~knuth/abcde.html#bugs",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://www-cs-faculty.stanford.edu/~knuth/abcde.html#bugs")]),e._v(". The bugfixes in the latest release can be found "),o("a",{attrs:{href:"https://tug.org/texmfbug/tuneup21bugs.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v("."),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-6"}},[e._v("↩")])]),o("li",{attrs:{id:"fn-7"}},[e._v("Unfortunately it appears that this link has succumbed to link rot - a topic that I think about a lot and will probably write about in the near future. The original sentimentalversioning.org page leads to something else now."),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref-7"}},[e._v("↩")])])])])])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof d&&d(p);t.default=p.exports}}]);