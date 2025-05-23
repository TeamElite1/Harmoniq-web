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
  { emoji: '', label: 'Great', value: 5 },
  { emoji: '', label: 'Good', value: 4 },
  { emoji: '', label: 'Okay', value: 3 },
  { emoji: '', label: 'Low', value: 2 },
  { emoji: '', label: 'Struggling', value: 1 }
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
