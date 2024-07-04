import { dataType, optionType } from "./types";

export const option = (data:dataType) => {

  const colors:Record<string,string> = {
    "READING": "#38bdf8",
    "UNREAD": "#e5e5e5",
    "READED": "#65a30d",
  };

  let totalNum = 0, optionData:optionType[] = [];

  if (data?.length > 0) {
    data.forEach((item) => {
      totalNum += item.number;
      optionData.push({
        value: item.number,
        name: item._id,
        itemStyle: {
          color: colors[item._id]
        }
      })
    })
  }

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