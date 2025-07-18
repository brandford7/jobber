// src/components/form/FormCheckbox.tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control, FieldValues, Path } from "react-hook-form";

interface FormCheckboxProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

export const FormCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
}: FormCheckboxProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id={name}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel htmlFor={name}>{label}</FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
