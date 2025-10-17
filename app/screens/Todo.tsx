import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Todo() {
    type Task = {
        id: number;
        task: string;
        completed: boolean;
    }
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editId, setEditId] = useState<number>(-1);


    const handleAddTask = () => {

        if (!task) return;

        else {
            if (editId === -1) {
                const newTask: Task = {
                    id: Date.now(),
                    task: task,
                    completed: false,
                }
                setTasks([...tasks, newTask])
                setTask("");
                Alert.alert("Task Added");
                console.log(tasks);
            } else {
                setTasks((prev) => (
                    prev.map((t) => (
                        t.id === editId ? { ...t, task } : t
                    ))
                ))

                setEditId(-1);
                setTask("");
                Alert.alert("Task Updated");
            }
        }

    }
    const handleDelete = (index: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== index);
        console.log(updatedTasks);

        setTasks(updatedTasks);
    }

    const handleFinished = (id: number) => {
        setTasks((prev) => (
            prev.map((task) => (
                task.id === id ? { ...task, completed: !task.completed } : task
            ))
        ))
    }

    const handleUpdateTask = (id: number) => {
        const taskToEdit = tasks.find((t) => t.id === id);
        if (taskToEdit) {
            setTask(taskToEdit.task);  // <-- only set the string
            setEditId(id)
        }
    }




    return (
        <View className="flex-1 items-center mt-40 p-5">
            <Text className="text-4xl font-semibold text-teal-600">Todo App</Text>
            <View className=" w-full">
                <TextInput
                    placeholder="Create a task"
                    className="border border-red-800 py-5 my-4 rounded-lg placeholder:text-gray-600 placeholder:p-2"
                    onChangeText={setTask}
                    value={task}
                />
                <TouchableOpacity className="bg-teal-600 p-5 rounded-md " onPress={handleAddTask}>
                    <Text className="text-center text-white text-lg font-semibold">{editId === -1 ? "Add" : "Update"}</Text>
                </TouchableOpacity>

                <View className="my-2 p-2">
                    <FlatList keyExtractor={(task) => task.id.toString()} data={tasks} renderItem={(task) => (
                        <View className="border  rounded-lg flex-row justify-between items-center px-2 my-2  p-5">
                            <Text className={`text-xl ${task.item.completed ? "line-through" : ""}`} onPress={() => handleFinished(task.item.id)}>{task.item.task}</Text>
                            <View className="flex-row gap-3">
                                <TouchableOpacity className="rounded-md px-3 py-2 bg-yellow-400" onPress={() => handleUpdateTask(task.item.id)}>
                                    <Text className="font-semibold">Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="rounded-md px-3 py-2 bg-red-500" onPress={() => handleDelete(task.item.id)}>
                                    <Text className="text-white font-semibold">Delete</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )} showsVerticalScrollIndicator={false} className="h-3/4" />
                </View>
            </View>
        </View>
    )
}