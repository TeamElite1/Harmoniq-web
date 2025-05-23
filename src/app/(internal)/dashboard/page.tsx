// importing shadcn component needed for the dashboard
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress";
import { Calendar, CheckCircle, Heart, Moon, Sun, RefreshCw, Clock, Target, Smile } from "lucide-react";

//Mock data for the dashboard

const mockSchedule = [
  {
    id: 1,
    time: '9:00am',
    task: 'Morning meditation',
    completed: true
  },
  {
    id: 2,
    time: '10:30am',
    task: 'Team Standup Meeting',
    completed: true
  },
  {
    id: 3,
    time: '2:00pm',
    task: 'Focus Work Session',
    completed: false
  },
  {
    id: 4,
    time: '4:00pm',
    task: 'Exercise Break',
    completed: false
  },
  {
    id: 5,
    time: '6:00pm',
    task: 'Evening Reflection',
    completed: false
  }
];

//Motivational quotes Array
const motivationalQuotes = [
  "Progress, not perfection, is the goal.",
  "Small steps daily lead to big changes yearly.",
  "Your mental health is a priority, not a luxury.",
  "Balance is not something you find, it's something you create.",
  "Today's accomplishments were yesterday's impossibilities."
];

//Mood Options
const moodOptions = [
  { emoji: '😊', label: 'Great', value: 5 },
  { emoji: '🙂', label: 'Good', value: 4 },
  { emoji: '😐', label: 'Okay', value: 3 },
  { emoji: '😔', label: 'Low', value: 2 },
  { emoji: '😞', label: 'Struggling', value: 1 }
]

//Individual component for daily schedule
interface ScheduleItem{
  id: number; time: string; task: string; completed: boolean;
}

interface ScheduleCardProps {
  scheduleData: ScheduleItem[];
  onToggleTask?: (taskId: number) => void;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  scheduleData,
  onToggleTask
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Daily Schedule
        </CardTitle>
        <CardDescription>
          Your tasks for today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {scheduleData.map((item) => (
            <div key={item.id} className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${item.completed
              ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800'
              : 'bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700'}`}
              role="listitem"
              aria-label={`Task: ${item.task} at ${item.time}, ${item.completed ? 'completed' : 'prending'}`}
            >
              <div className=" flex items-center gap-3">
                <button
                  onClick={() => onToggleTask?.(item.id)}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label={`Mark ${item.task} as ${item.completed ? 'incomplete' : 'complete'}`}>
                  
                  <CheckCircle
                    className={`h-5 w-5 ${item.completed
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-400'}`}
                  />
                </button>
                <div>
                  <p className={`font-medium ${item.completed ? 'line-through text-gray-500'
                    : 'text-gray-900 dark:text-gray-100'
                    }`}>
                    {item.task}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

//Task Progress Component
interface TaskProgressProps {
  completedTasks: number;
  totalTasks: number;
}

const TaskProgressCard: React.FC<TaskProgressProps> = ({
  completedTasks,
  totalTasks
}) => {
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Task Progress
        </CardTitle>
        <CardDescription>
          Todays Completion Rate
        </CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}

const Dashboard = () => {
  return (
    <div>
      this is the Dashboard page
    </div>
  )
}

export default Dashboard
