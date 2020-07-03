window.addEventListener('DOMContentLoaded', () => {
  (() => {
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;

    const sceneInfo = [
      {
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        obj: {
          container: document.querySelector('#scroll-section-0'),
          sticky0: document.querySelector('#scroll-section-0 .sticky-0'),
          sticky1: document.querySelector('#scroll-section-0 .sticky-1'),
          sticky2: document.querySelector('#scroll-section-0 .sticky-2'),
          sticky3: document.querySelector('#scroll-section-0 .sticky-3'),
        },
        values: {
          sticky0Opacity: [0, 1],
        },
      },
      {
        type: 'normal',
        heightNum: 5,
        scrollHeight: 0,
        obj: {
          container: document.querySelector('#scroll-section-1'),
        },
      },
      {
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        obj: {
          container: document.querySelector('#scroll-section-2'),
        },
      },
      {
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        obj: {
          container: document.querySelector('#scroll-section-3'),
        },
      },
    ];

    const setLayout = () => {
      sceneInfo.forEach(element => {
        element.scrollHeight = element.heightNum * window.innerHeight;
        element.obj.container.style.height = `${element.scrollHeight}px`;
      });
      let totalScrollHeight = 0;
      for (let i = 0; i < sceneInfo.length; i++) {
        totalScrollHeight += sceneInfo[i].scrollHeight;
        if (totalScrollHeight >= yOffset) {
          currentScene = i;
          break;
        }
      }
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    };

    const calcValues = (values, currentYoffset) => {
      let scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;
      return scrollRatio * (values[1] - values[0]) + values[0];
    };

    const playAnimation = () => {
      const obj = sceneInfo[currentScene].obj;
      const values = sceneInfo[currentScene].values;
      const currentYoffset = yOffset - prevScrollHeight;

      switch (currentScene) {
        case 0:
          let sticky0OpacityIn = calcValues(values.sticky0Opacity, currentYoffset);
          obj.sticky0.style.opacity = sticky0OpacityIn;
          break;
        case 0:
          break;
        case 0:
          break;
        case 0:
          break;
        default:
          break;
      }
    };

    const scrollLoop = () => {
      enterNewScene = false;
      prevScrollHeight = 0;
      for (let i = 0; i < currentScene; i++) {
        prevScrollHeight += sceneInfo[i].scrollHeight;
      }
      yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight && ((enterNewScene = true), currentScene++);
      yOffset < prevScrollHeight && currentScene > 0 && currentScene--;

      document.body.setAttribute('id', `show-scene-${currentScene}`);
      if (enterNewScene) return;
      playAnimation();
    };

    window.addEventListener('load', setLayout);
    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    });
  })();
});
