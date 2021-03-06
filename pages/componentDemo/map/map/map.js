// map.js
var api = require('touchui-api')
export default {
  data () {
    return {
      latitude: 39.855060,
      longitude: 116.368650,
      scale: 16,
      markers: [
        {
          id: 1,
          latitude: 39.853212,
          longitude: 116.371388,
          // 谷歌坐标
          // latitude: 39.853167,
          // longitude: 116.371345,
          title: '马家堡地铁站',
          label: {
            content: '点击图标显示标题',
            color: '#ff0000',
            fontSize: 12,
            x: 0,
            y: 0
          }
        },
        {
          id: 2,
          latitude: 39.855060,
          longitude: 116.368650,
          iconPath: require('./star.png'),
          rotate: 0,
          alpha: 0.9,
          width: 30,
          height: 30,
          callout: {
            content: '北京引领视觉科技有限公司',
            color: '#ff0000',
            fontSize: 14,
            borderRadius: 5,
            bgColor: '#000',
            padding: 5,
            display: 'ALWAYS'
          },
          anchor: {
            x: 0.5,
            y: 0.5
          }
        },
        {
          id: 3,
          latitude: 39.853332,
          longitude: 116.371028,
          title: '汽车',
          rotate: 90,
          iconPath: require('./car.png'),
          width: 30,
          height: 30,
          anchor: {
            x: 0.5,
            y: 0.5
          }
        }
      ],
      polyline: [
        {
          points: [
            {
              latitude: 39.853332,
              longitude: 116.371028
            },
            {
              latitude: 39.854864,
              longitude: 116.371179
            },
            {
              latitude: 39.856289,
              longitude: 116.370293
            },
            {
              latitude: 39.855897,
              longitude: 116.368909
            }
          ],
          color: '#ff0000',
          width: 2,
          dottedLine: true
        }
      ],
      circles: [
        {
          latitude: 39.853210,
          longitude: 116.371370,
          color: '#ff0000',
          fillColor: '#00ff0033',
          radius: 80,
          strokeWidth: 1
        }
      ],
      controls: [
        {
          id: 1,
          iconPath: require('./metro.png'),
          position: {
            left: 20,
            top: 240,
            width: 40,
            height: 40
          },
          clickable: true
        }
      ],
      showLocation: true,
      includePoints: [
        // // 右安门医院
        // {
        //   latitude: 39.859320,
        //   longitude: 116.361651
        // },
        // // 万芳亭公园
        // {
        //   latitude: 39.858727,
        //   langitude: 116.376071
        // },
        // 角门西里 晨光小区
        // {
        //   latitude: 39.848942,
        //   longitude: 116.375213
        // }
      ],
      back: false
    }
  },
  methods: {
    regionchange (e) {
      console.log('regionchange', e)
    },
    markertap (e) {
      console.log('markertap', e)
    },
    controltap (e) {
      console.log('controltap', e)
      if (e.controlId === 1) {
        // 移动视图到地铁站
        this.setData({
          latitude: 39.853212,
          longitude: 116.371388
        })
      }
    },
    tap (e) {
      console.log('tap', e)
    },
    callouttap (e) {
      console.log('callouttap', e)
    },
    move (e) {
      var path = [
        {
          latitude: 39.853332,
          longitude: 116.371028
        },
        {
          latitude: 39.854864,
          longitude: 116.371179
        },
        {
          latitude: 39.856289,
          longitude: 116.370293
        },
        {
          latitude: 39.855897,
          longitude: 116.368909
        }
      ]
      if (this.$data.back) {
        path.reverse()
      }
      var mapContent = api.createMapContext('map')
      mapContent.translateMarker({
        markerId: 3,
        destination: path[1],
        autoRotate: true,
        duration: 4000,
        animationEnd: () => {
          mapContent.translateMarker({
            markerId: 3,
            destination: path[2],
            autoRotate: true,
            duration: 4000,
            animationEnd: () => {
              mapContent.translateMarker({
                markerId: 3,
                destination: path[3],
                autoRotate: true,
                duration: 4000,
                animationEnd: () => {
                  console.log('end')
                  this.$data.back = !this.$data.back
                },
                fail: function (e) {
                  console.log(e)
                }
              })
            },
            fail: function (e) {
              console.log(e)
            }
          })
        },
        fail: function (e) {
          console.log(e)
        }
      })
    },
    moveToLocation () {
      api.createMapContext('map').moveToLocation()
    }
  }
}
