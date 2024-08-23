
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/component/ui/dialog"
import { InputForm } from "@/component/ui/inputMax";



function DonateBox(){
  return(
      <>  
      <div className="flex justify-center items-center my-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-4xl font-bold mb-4">13 Unique Donors</h2>
          <Dialog>
              <DialogTrigger>Donate Now!</DialogTrigger>
                  <DialogContent> 
                      <DialogHeader>
                      <DialogTitle>Amount?</DialogTitle>
                      <DialogDescription>
                        <InputForm/>
                      </DialogDescription>
                      </DialogHeader>
                  </DialogContent>
          </Dialog>
      </div>
      </div>
      </>
  );
};
export default DonateBox;

