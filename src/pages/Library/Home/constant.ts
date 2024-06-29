const testdata = [
  { value: 1048, name: 'READING', itemStyle:{color:'#38bdf8'} },
  { value: 735, name: 'UNREAD', itemStyle:{color:'#e5e5e5'} },
  { value: 580, name: 'READED', itemStyle:{color:'#65a30d'} },
];

export const option = (data) => {

  const totalNum = data.sumBook + data.sumAuthor + data.sumGenre;

  const optionData = [
    {
      value: data.sumBook,
      name: "Book Total",
      itemStyle: {
        color: '#38bdf8'
      }
    },
    {
      value: data.sumAuthor,
      name: "Author Total",
      itemStyle: {
        color: '#e5e5e5',
      }
    },
    {
      value: data.sumGenre,
      name: "Genre Total",
      itemStyle: {
        color: '#65a30d',
      }
    }
  ]

  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: optionData,
      orient: 'vertical',
      icon: 'circle',
      top: 'center',
      right: '0',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['20%', '30%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
        },
        selectedMode: false,
        data: optionData
      },
      {
        name: '标题',
        z: 100,
        type: 'gauge',
        radius: '-50%',
        detail: {
          offsetCenter:[-1, -10],
          fontSize: 20,
        },
        pointer: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: totalNum,
            name: 'All Books',
            title:{
              show: true,
              fontSize: 12,
              offsetCenter: [0, '-20%']
            }
          }
        ]
      }
    ]
  }
}