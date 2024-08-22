import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'


export const Barchart = () => {

  const course = [
    {
      name: 'python',
      student: 15,
      fees: '20$',
    },
    {
      name: 'javascript',
      student: 12,
      fees: '21$',
    },
    {
      name: 'html',
      student: 10,
      fees: '12$',
    },
    {
      name: 'C',
      student: 14,
      fees: '18$',
    },
    {
      name: 'react',
      student: 20,
      fees: '25$',
    },
    {
      name: 'php',
      student: 13,
      fees: '16$',
    },
    {
      name: 'c++',
      student: 11,
      fees: '10$',
    },
    {
      name: 'java',
      student: 18,
      fees: '21$',
    },
    {
      name: 'flutter',
      student: 19,
      fees: '20$',
    },
  ]

  return (
    <>
      <div className='mt-[30px] mb-[45px] ml-[50px] w-[550px] h-[500px] bg-slate-200 p-7 rounded-lg '>
        <h1 className='mb-5 font-bold text-2xl'>Bar Chart</h1>
        <ResponsiveContainer width='99%' height='85%'  >
          <BarChart data={course} width={400} height={400} >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey='student' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div >
    </>
  )
}