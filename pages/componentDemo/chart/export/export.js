// export.js
export default {
  data () {
    return {
      winWidth: ui.WIN_WIDTH,
      bar1: {
        margin: {
          left: 90,
          right: 20,
          top: 20,
          bottom: 20
        },
        colorSchema: ['#ffdd83'],
        data: [
          {
            value: 1236,
            name: '1月'
          }, {
            value: 334,
            name: '2月'
          }, {
            value: 535,
            name: '3月'
          }, {
            value: 413,
            name: '4月'
          }, {
            value: 175,
            name: '5月'
          }, {
            value: 623,
            name: '6月'
          }
        ]

      },
      groupData: {
        data: [
          {
            group: '北京',
            name: 'Direct1',
            value: 3,
            date: '2011-01-05'
          },
          {
            group: '上海',
            name: 'Eventbrite1',
            value: 23,
            date: '2011-01-05'
          },
          {
            group: '深圳',
            name: 'Email1',
            value: 10,
            date: '2011-01-05'
          },
          {
            group: '北京',
            name: 'Direct2',
            value: 10,
            date: '2011-01-06'
          },
          {
            group: '上海',
            name: 'Eventbrite2',
            value: 16,
            date: '2011-01-06'
          },
          {
            group: '深圳',
            name: 'Email2',
            value: 20,
            date: '2011-01-06'
          },
          {
            group: '北京',
            name: 'Direct3',
            value: 16,
            date: '2011-01-07'
          },
          {
            group: '上海',
            name: 'Eventbrite3',
            value: 10,
            date: '2011-01-07'
          },
          {
            group: '深圳',
            name: 'Email3',
            value: 26,
            date: '2011-01-07'
          },
          {
            group: '北京',
            name: 'Direct4',
            value: 23,
            date: '2011-01-08'
          },
          {
            group: '上海',
            name: 'Eventbrite4',
            value: 4,
            date: '2011-01-08'
          },
          {
            group: '深圳',
            name: 'Email4',
            value: 33,
            date: '2011-01-08'
          }
        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210'],
        margin: {
          top: 40,
          right: 20,
          bottom: 60,
          left: 50
        }
      },
      stackedBarData: {
        'data': [
          {
            'stack': '北京',
            'views': 0,
            'date': '2011-01-05'
          },
          {
            'stack': '上海',
            'views': 23,
            'date': '2011-01-05'
          },
          {
            'stack': '深圳',
            'views': 10,
            'date': '2011-01-05'
          },
          {
            'stack': '北京',
            'views': 10,
            'date': '2011-01-06'
          },
          {
            'stack': '上海',
            'views': 16,
            'date': '2011-01-06'
          },
          {
            'stack': '深圳',
            'views': 20,
            'date': '2011-01-06'
          },
          {
            'stack': '北京',
            'views': 16,
            'date': '2011-01-07'
          },
          {
            'stack': '上海',
            'views': 10,
            'date': '2011-01-07'
          },
          {
            'stack': '深圳',
            'views': 26,
            'date': '2011-01-07'
          },
          {
            'stack': '北京',
            'views': 23,
            'date': '2011-01-08'
          },
          {
            'stack': '上海',
            'views': 0,
            'date': '2011-01-08'
          },
          {
            'stack': '深圳',
            'views': 33,
            'date': '2011-01-08'
          }
        ],
        colorSchema: ['#3399ff', '#54cd72', '#fdd210']
      },
      lineData: {
        dataByTopic: [
          {
            topicName: '猩球崛起3:终极之战',
            topic: 123,
            dates: [
              {
                date: '2017-01-16',
                value: 2234
              },
              {
                date: '2017-01-17',
                value: 1342
              },
              {
                date: '2017-01-18',
                value: 2345
              },
              {
                date: '2017-01-19',
                value: 3225
              },
              {
                date: '2017-01-20',
                value: 2435
              },
              {
                date: '2017-01-21',
                value: 2977
              },
              {
                date: '2017-01-22',
                value: 4532
              },
              {
                date: '2017-01-23',
                value: 5323
              },
              {
                date: '2017-01-24',
                value: 3564
              },
              {
                date: '2017-01-25',
                value: 6532
              }
            ]
          }
        ],
        colorSchema: ['#e60012']
      },
      areaChartData: {
        data: [
          {
            date: '2011-10-20',
            name: '票房',
            value: 7363
          },
          {
            date: '2011-10-21T00:00:00Z',
            name: '票房',
            value: 10042
          },
          {
            date: '2011-10-22T00:00:00Z',
            name: '票房',
            value: 7019
          },
          {
            date: '2011-10-23T00:00:00Z',
            name: '票房',
            value: 2632
          },
          {
            date: '2011-10-24T00:00:00Z',
            name: '票房',
            value: 2276
          },
          {
            date: '2011-10-25T00:00:00Z',
            name: '票房',
            value: 2033
          },
          {
            date: '2011-10-26T00:00:00Z',
            name: '票房',
            value: 1815
          },
          {
            date: '2011-10-27T00:00:00Z',
            name: '票房',
            value: 1282
          },
          {
            date: '2011-10-28T00:00:00Z',
            name: '票房',
            value: 2468
          },
          {
            date: '2011-10-29T00:00:00Z',
            name: '票房',
            value: 1975
          },
          {
            date: '2011-10-30T00:00:00Z',
            name: '票房',
            value: 711
          },
          {
            date: '2011-10-31T00:00:00Z',
            name: '票房',
            value: 728
          }
        ],
        colorSchema: ['#fc9e08']
      },
      donut: {
        data: [
          {
            quantity: 14.4,
            name: '学生',
            id: 1
          }, {
            quantity: 35.9,
            name: '白领',
            id: 2
          }, {
            quantity: 49.6,
            name: '其他',
            id: 3
          }
        ],
        colorSchema: ['#2ec7ff', '#3f8ff1', '#ff574d']
      },
      stepData: [
        {
          value: 1,
          key: '1月'
        },
        {
          value: 2,
          key: '2月'
        },
        {
          value: 3,
          key: '3月'
        },
        {
          value: 6,
          key: '4月'
        },
        {
          value: 8,
          key: '5月'
        },
        {
          value: 11,
          key: '6月'
        },
        {
          value: 7,
          key: '7月'
        },
        {
          value: 6,
          key: '8月'
        },
        {
          value: 5,
          key: '9月'
        },
        {
          value: 2,
          key: '10月'
        },
        {
          value: 2,
          key: '11月'
        },
        {
          value: 1,
          key: '12月'
        }
      ],
      sparklineData: [
        {
          value: 13,
          date: '2011-01-06T00:00:00Z'
        },
        {
          value: 22,
          date: '2011-01-07T00:00:00Z'
        }, {
          value: 34,
          date: '2011-01-08T00:00:00Z'
        }, {
          value: 69,
          date: '2011-01-09T00:00:00Z'
        }, {
          value: 52,
          date: '2011-01-10T00:00:00Z'
        }, {
          value: 49,
          date: '2011-01-11T00:00:00Z'
        }, {
          value: 73,
          date: '2011-01-12T00:00:00Z'
        }, {
          value: 82,
          date: '2011-01-13T00:00:00Z'
        }
      ],
      areaGradient: ['#F5FDFF', '#F6FEFC']
    }
  },
  methods: {
    exprotCharts (e, filename, title) {
      this.$refs[e].export(filename, title)
    }
  }
}
