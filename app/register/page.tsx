"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, CheckCircle2 } from "lucide-react"

const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address").refine(
        (email) => email.endsWith("@yachaytech.edu.ec"),
        { message: "Please use your institutional email (@yachaytech.edu.ec)" }
    ),
    institution: z.string().min(2, "Institution must be at least 2 characters"),
    role: z.enum(["student", "professional", "speaker", "sponsor", "other"], {
        required_error: "Please select a role",
    }),
    interests: z.array(z.string()).min(1, "Please select at least one interest"),
    dietary: z.string().optional(),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
    document: z.instanceof(File, { message: "Please upload a verification document" }).optional(),
    repository: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
})

type FormValues = z.infer<typeof formSchema>

export default function RegisterPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            document: undefined,
            repository: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSuccess(true)
        toast.success("Registration successful!")
        console.log(data)
    }


    if (isSuccess) {
        return (
            <main className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-4 pt-24">
                    <div className="max-w-md w-full bg-secondary/30 backdrop-blur-xl border border-border rounded-2xl p-8 text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-foreground">Registration Successful!</h1>
                        <p className="text-muted-foreground">
                            Thank you for registering for Compufest 2026. We've sent a confirmation email to your inbox.
                        </p>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            <a href="/">Return Home</a>
                        </Button>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-24 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Join <span className="text-primary">Compufest 2026</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Register now to secure your spot at the premier technology event.
                    </p>
                </div>

                <div className="bg-secondary/20 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-700 delay-300 fill-mode-both">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} className="bg-background/50" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Insitutional Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@yachaytech.edu.ec" type="email" {...field} className="bg-background/50" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="document"
                                render={({ field: { value, onChange, ...fieldProps } }) => (
                                    <FormItem>
                                        <FormLabel>Poster (PDF)</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                accept=".pdf"
                                                className="bg-background/50 cursor-pointer"
                                                onChange={(e) => onChange(e.target.files?.[0])}
                                                {...fieldProps}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Upload your poster in PDF format.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="repository"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Repository</FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://github.com/your-repo" {...field} className="bg-background/50" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    "Complete Registration"
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>

            <Footer />
        </main >
    )
}
