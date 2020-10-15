const mock = {
  useUserModel: {
    name: '彭道宽',
    school: [
      {
        s_name: 'xxx大学',
        time: '2015-2019',
      },
      {
        s_name: 'xxx高中',
        time: '2012-2015',
      },
    ],
    currentCompany: {
      c_name: 'CVTE',
      c_job: '前端工程师',
      school: [
        {
          s_name: 'xxx大学',
          time: '2015-2019',
        },
        {
          s_name: 'xxx高中',
          time: '2012-2015',
          school: [
            {
              s_name: 'xxx大学',
              time: '2015-2019',
            },
            {
              s_name: 'xxx高中',
              time: '2012-2015',
              school: [
                {
                  s_name: 'xxx大学',
                  time: '2015-2019',
                },
                {
                  s_name: 'xxx高中',
                  time: '2012-2015',
                  school: [
                    {
                      s_name: 'xxx大学',
                      time: '2015-2019',
                    },
                    {
                      s_name: 'xxx高中',
                      time: '2012-2015',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  useSugarModal: {
    name: 'STSC',
    address: 'GuangZhou',
    people: [
      {
        name: '彭道宽',
        count: 2,
        age: null,
        size: undefined,
      },
      {
        name: '潘潇',
      },
    ],
  },
}
export default mock
