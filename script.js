const w = document.querySelector(".line").clientWidth;
const h = document.querySelector(".line").clientHeight;
const tl = gsap.timeline();

let count = 1;
nav.onclick = () => {
    if(count) {
        tl.to(".line", {
            width: 0,
            duration: .3
        })
        .set(".line", {rotate: 45, top: 0})
        .set(".line:nth-child(2)", {rotate: -45, top: 0, bottom: "auto"})
        .to(".line", {
            width: "100%",
            y: "-50%",
            top: "50%",
            duration: .3,
            stagger: .3
        })
        .to(".line:nth-child(2)", {
            y: "-50%",
            bottom: "50%",
            duration:.3,
        })
        count--;
    } else {
        tl.to(".line", {
            rotate: 0,
            duration:.3
        })
        .to(".line", {
            y: 0,
            top: "32%",
            duration:.3
        })
        .to(".line:nth-child(2)", {
            rotate: 0,
            top: "68%",
            y: -h,
            duration:.3
        }, "<")
        count++;
    }
}