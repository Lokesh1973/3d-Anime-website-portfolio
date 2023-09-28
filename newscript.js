function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
        new/046.png
        new/047.png
        new/048.png
        new/049.png
        new/050.png
        new/051.png
        new/052.png
        new/053.png
        new/054.png
        new/055.png
        new/056.png
        new/057.png
        new/058.png
        new/059.png
        new/060.png
        new/061.png
        new/062.png
        new/063.png
        new/064.png
        new/065.png
        new/066.png
        new/067.png
        new/068.png
        new/069.png
        new/070.png
        new/071.png
        new/072.png
        new/073.png
        new/074.png
        new/075.png
        new/076.png
        new/077.png
        new/078.png
        new/079.png
        new/080.png
        new/081.png
        new/082.png
        new/083.png
        new/084.png
        new/085.png
        new/086.png
        new/087.png
        new/088.png
        new/089.png
        new/090.png
        new/091.png
        new/092.png
        new/093.png
        new/094.png
        new/095.png
        new/096.png
        new/097.png
        new/098.png
        new/099.png
        new/100.png
        new/101.png
        new/102.png
        new/103.png
        new/104.png
        new/105.png
        new/106.png
        new/107.png
        new/108.png
        new/109.png
        new/110.png
        new/111.png
        new/112.png
        new/113.png
        new/114.png
        new/115.png
        new/116.png
        new/117.png
        new/118.png
        new/119.png
        new/120.png
        new/121.png
        new/122.png
        new/123.png
        new/124.png
        new/125.png
        new/126.png
        new/127.png
        new/128.png
        new/129.png
        new/130.png
        new/131.png
        new/132.png
        new/133.png
        new/134.png
        new/135.png
        new/136.png
        new/137.png
        new/138.png
        new/139.png
        new/140.png
        new/141.png
        new/142.png
        new/143.png
        new/144.png
        new/145.png
        new/146.png
        new/147.png
        new/148.png
        new/149.png
        new/150.png
        new/151.png
        new/152.png
        new/153.png
        new/154.png
        new/155.png
        new/156.png
        new/157.png
        new/158.png
        new/159.png
        new/160.png
        new/161.png
        new/162.png
        new/163.png
        new/164.png
        new/165.png
        new/166.png
        new/167.png
        new/168.png
        new/169.png
        new/170.png
        new/171.png
        new/172.png
        new/173.png
        new/174.png
        new/175.png
        new/176.png
        new/177.png
        new/178.png
        new/179.png
        new/180.png
        new/181.png
        new/182.png
        new/183.png
        new/184.png
        new/185.png
        new/186.png
        new/187.png
        new/188.png
        new/189.png
        new/190.png
        new/191.png
        new/192.png
        new/193.png
        new/194.png
        new/195.png
        new/196.png
        new/197.png
        new/198.png
        new/199.png
        new/200.png
        new/201.png
        new/202.png
        new/203.png
        new/204.png
        new/205.png
        new/206.png
        new/207.png
        new/208.png
        new/209.png
        new/210.png
        new/211.png
        new/212.png
        new/213.png
        new/214.png
        new/215.png
        new/216.png
        new/217.png
        new/218.png
        new/219.png
        new/220.png
        new/221.png
        new/222.png
        new/223.png
        new/224.png
        new/225.png
        new/226.png
        new/227.png
        new/228.png
        new/229.png
        new/230.png
        new/231.png
        new/232.png
        new/233.png
        new/234.png
        new/235.png
        new/236.png
        new/237.png
        new/238.png
        new/239.png
        new/240.png
        new/241.png
        new/242.png
        new/243.png
        new/244.png
        new/245.png
        new/246.png
        new/247.png
        new/248.png
        new/249.png
        new/250.png
        new/251.png
        new/252.png
        new/253.png
        new/254.png
        new/255.png
        new/256.png
        new/257.png
        new/258.png
        new/259.png
        new/260.png
        new/261.png
        new/262.png
        new/263.png
        new/264.png
        new/265.png
        new/266.png
        new/267.png
        new/268.png
        new/269.png
        new/270.png
        new/271.png
        new/272.png
        new/273.png
        new/274.png
        new/275.png
        new/276.png
        new/277.png
        new/278.png
        new/279.png
        new/280.png
        new/281.png
        new/282.png
        new/283.png
        new/284.png
        new/285.png
        new/286.png
        new/287.png
        new/288.png
        new/289.png
        new/290.png
        new/291.png
        new/292.png
        new/293.png
        new/294.png
        new/295.png
        new/296.png
        new/297.png
        new/298.png
        new/299.png
        new/300.png
        new/301.png
        new/302.png
        new/303.png
        new/304.png
        new/305.png
        new/306.png
        new/307.png
        new/308.png
        new/309.png
        new/310.png
        new/311.png
        new/312.png
        new/313.png
        new/314.png
        new/315.png
        new/316.png
        new/317.png
        new/318.png
        new/319.png
        new/320.png
        new/321.png
        new/322.png
        new/323.png
        new/324.png
        new/325.png
        new/326.png
        new/327.png
        new/328.png
        new/329.png
        new/330.png
        new/331.png
        new/332.png
        new/333.png
        new/334.png
        new/335.png
        new/336.png
        new/337.png
        new/338.png
        new/339.png
        new/340.png
        new/341.png
        new/342.png
        new/343.png
        new/344.png
        new/345.png
        new/346.png
        new/347.png
        new/348.png
        new/349.png
        new/350.png
        new/351.png
        new/352.png
        new/353.png
        new/354.png
        new/355.png
        new/356.png
        new/357.png
        new/358.png
        new/359.png
        new/360.png
        new/361.png
        new/362.png
        new/363.png
        new/364.png
        new/365.png
        new/366.png
        new/367.png
        new/368.png
        new/369.png
        new/370.png
        new/371.png
        new/372.png
        new/373.png
        new/374.png
        new/375.png
        new/376.png
        new/377.png
        new/378.png
        new/379.png
        new/380.png
        new/381.png
        new/382.png
        new/383.png
        new/384.png
        new/385.png
        new/386.png
        new/387.png
        new/388.png
        new/389.png
        new/390.png
        new/391.png
        new/392.png
        new/393.png
        new/394.png
        new/395.png
        new/396.png
        new/397.png
        new/398.png
        new/399.png
        new/400.png
        new/401.png
        new/402.png
        new/403.png
        new/404.png
        new/405.png
        new/406.png
        new/407.png
        new/408.png
        new/409.png
        new/410.png
        new/411.png
        new/412.png
        new/413.png
        new/414.png
        new/415.png
        new/416.png
        new/417.png
        new/418.png
        new/419.png
        new/420.png
        new/421.png
        new/422.png
        new/423.png
        new/424.png
        new/425.png
        new/426.png
        new/427.png
        new/428.png
        new/429.png
        new/430.png
        new/431.png
        new/432.png
        new/433.png
        new/434.png
        new/435.png
        new/436.png
        new/437.png
        new/438.png
        new/439.png
        new/440.png
        new/441.png
        new/442.png
        new/443.png
        new/444.png
        new/445.png
        new/446.png
        new/447.png
        new/448.png
        new/449.png
        new/450.png
        new/451.png
        new/452.png
        new/453.png
        new/454.png
        new/455.png
        new/456.png
        new/457.png
        new/458.png
        new/459.png
        new/460.png
        new/461.png
        new/462.png
        new/463.png
        new/464.png
        new/465.png
        new/466.png
        new/467.png
        new/468.png
        new/469.png
        new/470.png
        new/471.png
        new/472.png
        new/473.png
        new/474.png
        new/475.png
        new/476.png
        new/477.png
        new/478.png
        new/479.png
        new/480.png
        new/481.png
        new/482.png
        new/483.png
        new/484.png
        new/485.png
        new/486.png
        new/487.png
        new/488.png
        new/489.png
        new/490.png
        new/491.png
        new/492.png
        new/493.png
        new/494.png
        new/495.png
        new/496.png
        new/497.png
        new/498.png
        new/499.png
        new/500.png
        new/501.png
        new/502.png
        new/503.png
        new/504.png
        new/505.png
        new/506.png
        new/507.png
        new/508.png
        new/509.png
        new/510.png
        new/511.png
        new/512.png
        new/513.png
        new/514.png
     `;
  return data.split("\n")[index];
}

const frameCount = 500;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page5", {
  scrollTrigger: {
    trigger: `#page5`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page6", {
  scrollTrigger: {
    trigger: `#page6`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
