interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  const { completed } = props
  return <div className="bg-purple-700 w-10 h-10 mt-1 rounded-md">{completed}</div>
}