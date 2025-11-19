"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ContactForm } from "@/components/forms/contact-form"

const internships = [
  "Web Development",
  "Android Development",
  "Data Science",
  "Java Programming",
  "C++ Programming",
  "Python Programming",
  "UI/UX Design",
  "Artificial Intelligence",
  "Machine Learning",
  "Flutter Developer",
  "ReactJS Developer",
  "JavaScript Developer",
]

export default function JoinUsPage() {
  const [selected, setSelected] = useState<string | undefined>()

  return (
    <main className="mx-auto max-w-5xl px-4 py-14 md:py-18">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Work with us</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          We’re building modern products across web and AI. Join as an intern, a campus ambassador, or drive sales and
          earn commissions.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Internships</CardTitle>
            <CardDescription>Select a domain from the list inspired by your screenshot.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selected} onValueChange={setSelected}>
              <SelectTrigger aria-label="Select internship">
                <SelectValue placeholder="Choose a domain" />
              </SelectTrigger>
              <SelectContent>
                {internships.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled={!selected} onClick={() => {
                   window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfDd6So1s9AZfbF7Vv4wnOGdlKbePdtmZH4XxGFcQ3X1-Vplg/viewform?usp=header`,'_blank', 'noopener,noreferrer' )
                }}>Apply for internship</Button>
              </DialogTrigger>
            </Dialog>
            <p className="text-xs text-muted-foreground">
              We accept rolling applications. Share links (GitHub, portfolio, LinkedIn) in your message.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Campus Ambassador</CardTitle>
              <CardDescription>Lead Byte Forge initiatives at your campus and get rewarded with incentives and giveaways.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-inside list-disc text-sm text-muted-foreground">
                <li>Host events and spread the word</li>
                <li>Coordinate student projects</li>
                <li>Grow our community</li>
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => {
                    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSfDd6So1s9AZfbF7Vv4wnOGdlKbePdtmZH4XxGFcQ3X1-Vplg/viewform?usp=header`,'_blank', 'noopener,noreferrer' )
                  }}>Apply</Button>
                </DialogTrigger>
              </Dialog>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Sales Executive</CardTitle>
              <CardDescription>Earn a commission for every project you bring.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                <span className="font-medium">Commission:</span> 20% of project value.
              </p>
              <p className="text-sm text-muted-foreground">Ideal for connectors who love tech and closing deals.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => {
                    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdWRMf0PUEnOEMFcc9cslqadgVwfA54spgKo5mjj3HOHWK6xg/viewform?usp=dialog`,'_blank', 'noopener,noreferrer' )
                  }}>Apply</Button>
                </DialogTrigger>

              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
