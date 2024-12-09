"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";

import { Plus, Minus, RotateCcw, Check } from "lucide-react";
import toast from "react-hot-toast";

const formSchema = z.object({
  production: z.number().int().nonnegative(),
});

export function ProductionJournaliere() {
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const [submittedProduction, setSubmittedProduction] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      production: 0,
    },
  });

  useEffect(() => {
    const targetPercentage = Math.min((submittedProduction / 100) * 100, 100);
    const animationDuration = 300; // ms
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      setAnimationPercentage(progress * targetPercentage);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [submittedProduction]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmittedProduction(values.production);
    console.log(values);
    toast("Enregistrée");
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-gradient-to-br from-amber-50 to-amber-50 p-6 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-amber-700">
        Production Journalière
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="production"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="sr-only">Quantité produite</FormLabel>
                <FormControl>
                  <div className="relative mx-auto h-64 w-64">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f0ece2"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#f69f3b"
                        strokeWidth="10"
                        strokeDasharray={`${animationPercentage * 2.827} 282.7`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={0}
                        className="w-28 border-none bg-transparent text-center text-4xl font-bold focus:ring-0"
                      />
                    </div>
                  </div>
                </FormControl>
                <div className="flex justify-center space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      form.setValue("production", Math.max(0, field.value - 1))
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => form.setValue("production", field.value + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => form.setValue("production", 0)}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-amber-500 text-white hover:bg-amber-600"
          >
            <Check className="mr-2 h-4 w-4" /> Enregistrer la production
          </Button>
        </form>
      </Form>
    </div>
  );
}
