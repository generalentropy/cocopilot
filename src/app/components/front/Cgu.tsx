import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { termsText } from "@/app/data/cgu";

export function TermsAndConditions() {
  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tighter">
          {termsText.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{termsText.subtitle}</p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="rounded-md border p-4">
          <p className="mb-6 text-sm text-muted-foreground">
            {termsText.introduction}
          </p>
          {termsText.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="mb-2 text-lg font-semibold">{section.title}</h2>
              <p className="whitespace-pre-line text-sm text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-end gap-4 text-sm italic text-muted-foreground">
        {termsText.lastUpdated}
      </CardFooter>
    </Card>
  );
}
