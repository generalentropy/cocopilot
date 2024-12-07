import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Globe,
  Calendar,
} from "lucide-react";

export default function MinimalistCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md bg-white shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-gray-800">
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <User className="text-gray-400" size={20} />
            <Input type="text" placeholder="Full Name" className="flex-1" />
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-gray-400" size={20} />
            <Input
              type="email"
              placeholder="Email Address"
              className="flex-1"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-gray-400" size={20} />
            <Input type="tel" placeholder="Phone Number" className="flex-1" />
          </div>
          <div className="flex items-center space-x-4">
            <Briefcase className="text-gray-400" size={20} />
            <Input type="text" placeholder="Occupation" className="flex-1" />
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-gray-400" size={20} />
            <Input type="text" placeholder="Location" className="flex-1" />
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="text-gray-400" size={20} />
            <Input type="url" placeholder="Website" className="flex-1" />
          </div>
          <div className="flex items-center space-x-4">
            <Calendar className="text-gray-400" size={20} />
            <Input type="date" placeholder="Date of Birth" className="flex-1" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Save Profile
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
