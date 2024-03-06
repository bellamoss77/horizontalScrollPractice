document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(MotionPathPlugin);

    const downArrow = document.querySelector('.arrow_down');
    const rightArrow = document.querySelector('.arrow_right');
    const horizontalSlideContainer = document.querySelector('.horizontal-slide-container');
    
    gsap.to(downArrow, {
        y: 25,
        ease: 'power2.inOut',
        yoyo: true,
        duration: 1,
        repeat: -1

    })

    gsap.to(horizontalSlideContainer, {
        x: () => -(horizontalSlideContainer.scrollWidth - window.innerWidth) + 'px',
        ease: 'none',
        scrollTrigger: {
            trigger: horizontalSlideContainer,
            pin: true,
            scrub: 2,
            end: () => '+=' + (horizontalSlideContainer.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true
        },
    });

    let tl = gsap.timeline();

    const paths = [
        { id: '#C', length: 50.137481689453125 },
        { id: '#o', length: 43.52302551269531 },
        { id: '#n', length: 40.91455078125 },
        { id: '#t', length: 29.016830444335938 },
        { id: '#i', length: 22.062700271606445 },
        { id: '#n2', length: 40.914554595947266 },
        { id: '#u', length: 40.87723922729492 },
        { id: '#e', length: 50.82768249511719 },
        { id: '#t2', length: 29.016834259033203 },
        { id: '#o2', length: 43.523067474365234 },
        { id: '#e2', length: 50.82770919799805 },
        { id: '#s', length: 37.35725021362305 },
        { id: '#s2', length: 37.351261138916016 },
        { id: '#a', length: 50.566322326660156 },
        { id: '#y', length: 41.56393051147461 },
        { id: '#g', length: 68.30785369873047 },
        { id: '#a2', length: 50.56638717651367 },
        { id: '#l', length: 25.474384307861328 },
        { id: '#l2', length: 25.474384307861328 },
        { id: '#e3', length: 50.823814392089844 },
        { id: '#r', length: 26.57977294921875 },
        { id: '#y2', length: 41.56392288208008 },    
    ]

    paths.forEach(path => {
        gsap.set(path.id, { strokeDasharray: path.length, strokeDashoffset: path.length, opacity: 0 });
        console.log(`${path.id} strokeDasharray:`, gsap.getProperty(path.id, 'strokeDasharray'));
        console.log(`${path.id} strokeDashoffset:`, gsap.getProperty(path.id, 'strokeDashoffset'));
    });

    tl.to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#C',
            align: '#C',
            alignOrigin: [0, 1]
        }
    }, '0')
      .to('#C', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
       
      }, '0')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#o',
            align: '#o',
            alignOrigin: [0, 1]
        }
      })
      .to('#o', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#n',
            align: '#n',
            alignOrigin: [0, 1]
        }
      })
      .to('#n', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#t',
            align: '#t',
            alignOrigin: [0, 1]
        }
      })
      .to('#t', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#i',
            align: '#i',
            alignOrigin: [0, 1]
        }
      })
      .to('#i', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#n2',
            align: '#n2',
            alignOrigin: [0, 1]
        }
      })
      .to('#n2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#u',
            align: '#u',
            alignOrigin: [0, 1]
        }
      })
      .to('#u', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#e',
            align: '#e',
            alignOrigin: [0, 1]
        }
      }, '+=0.2s')
      .to('#e', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#t2',
            align: '#t2',
            alignOrigin: [0, 1]
        }
      })
      .to('#t2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#o2',
            align: '#o2',
            alignOrigin: [0, 1]
        }
      }, '+=0.2s')
      .to('#o2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#e2',
            align: '#e2',
            alignOrigin: [0, 1]
        }
      })
      .to('#e2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#s',
            align: '#s',
            alignOrigin: [0, 1]
        }
      })
      .to('#s', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#s2',
            align: '#s2',
            alignOrigin: [0, 1]
        }
      })
      .to('#s2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#a',
            align: '#a',
            alignOrigin: [0, 1]
        }
      })
      .to('#a', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#y',
            align: '#y',
            alignOrigin: [0, 1]
        }
      }, '+=0.2s')
      .to('#y', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#g',
            align: '#g',
            alignOrigin: [0, 1]
        }
      })
      .to('#g', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#a2',
            align: '#a2',
            alignOrigin: [0, 1]
        }
      })
      .to('#a2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#l',
            align: '#l',
            alignOrigin: [0, 1]
        }
      })
      .to('#l', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#l2',
            align: '#l2',
            alignOrigin: [0, 1]
        }
      })
      .to('#l2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#e3',
            align: '#e3',
            alignOrigin: [0, 1]
        }
      })
      .to('#e3', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#r',
            align: '#r',
            alignOrigin: [0, 1]
        }
      })
      .to('#r', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#y2',
            align: '#y2',
            alignOrigin: [0, 1]
        }
      })
      .to('#y2', {
        duration: 0.5,
        strokeDashoffset: 0,
        opacity: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('#pencilPath', {
        duration: 0.5,
        y: 20,
        rotation: 220
        })
      })
    