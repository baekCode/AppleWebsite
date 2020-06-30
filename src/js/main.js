window.addEventListener('DOMContentLoaded', () => {
  (() => {
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;

    const sceneInfo = [
      {
        type: 'sticky',
        heightNum: 5,
        scrollHeight: 0,
        obj: {
          container: document.querySelector('#scroll-section-0'),
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
    };

    const scrollLoop = () => {
      prevScrollHeight = 0;
      for (let i = 0; i < currentScene; i++) {
        prevScrollHeight += sceneInfo[i].scrollHeight;
      }
      yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight && currentScene++;
      yOffset < prevScrollHeight && currentScene > 0 && currentScene--;

      console.log(currentScene);
    };

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    });

    setLayout();
  })();
});
