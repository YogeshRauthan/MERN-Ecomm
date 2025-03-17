import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const types = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  const renderInputsByComponentsType = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem?.name] || "";
    switch (getControlItem?.componentType) {
      case types.INPUT:
        element = (
          <Input
            name={getControlItem?.name}
            placeholder={getControlItem?.placeholder}
            id={getControlItem?.name}
            type={getControlItem?.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem?.name]: event.target.value,
              })
            }
          />
        );

        break;

      case types.SELECT:
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem?.name]: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder={getControlItem?.label} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {getControlItem?.options && getControlItem?.options?.length > 0
                ? getControlItem?.options.map((optionItem) => (
                    <SelectItem key={optionItem?.id} value={optionItem?.id} className="hover:bg-gray-100">
                      {optionItem?.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;

      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControlItem?.name}
            placeholder={getControlItem?.placeholder}
            id={getControlItem?.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem?.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        element = (
          <Input
            name={getControlItem?.name}
            placeholder={getControlItem?.placeholder}
            id={getControlItem?.name}
            type={getControlItem?.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem?.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem?.name}>
            <Label>{controlItem?.label}</Label>
            {renderInputsByComponentsType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="shadow mt-2 w-full hover:cursor-pointer" variant="secondary">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
