document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(MotionPathPlugin);

    let tl = gsap.timeline();

    tl.to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#C',
            align: '#C',
            alignOrigin: [0, 1]
        }
    })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#o',
            align: '#o',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#n',
            align: '#n',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#t',
            align: '#t',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#i',
            align: '#i',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#n2',
            align: '#n2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#u',
            align: '#u',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#e',
            align: '#e',
            alignOrigin: [0, 1]
        }
      }, '+=0.2s')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#t2',
            align: '#t2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#o2',
            align: '#o2',
            alignOrigin: [0, 1]
        }
      }, '+=0.2s')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#e2',
            align: '#e2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#s',
            align: '#s',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#s2',
            align: '#s2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#a',
            align: '#a',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#y',
            align: '#y',
            alignOrigin: [0, 1]
        }
      }, '+=0.2s')
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#g',
            align: '#g',
            alignOrigin: [0, 1]
        }
      }).to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#a2',
            align: '#a2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#l',
            align: '#l',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#l2',
            align: '#l2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#e3',
            align: '#e3',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#r',
            align: '#r',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#y2',
            align: '#y2',
            alignOrigin: [0, 1]
        }
      })
      .to('#pencilPath', {
        duration: 0.5,
        motionPath: {
            path: '#period',
            align: '#period',
            alignOrigin: [0, 1]
        }
      })

    gsap.fromTo('#C', {
        opacity: 0,
        strokeDashoffset: '100%'
    }, {
        duration: 0.5,
        opacity: 1,
        strokeDashoffset: '0%',
        ease: 'power1.inOut'
    })

})
    