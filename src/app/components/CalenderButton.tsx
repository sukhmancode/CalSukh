import { Button } from '@/components/ui/button';
import { AriaButtonProps,useButton} from '@react-aria/button'
import { CalendarState } from '@react-stately/calendar'
import { mergeProps }  from "@react-aria/utils"
import { useRef } from 'react';
import { useFocusRing } from '@react-aria/focus';
export function CalendarButton(props: AriaButtonProps<"button"> & {
    state?:CalendarState;
    side?:"left" | "right";
}) {
    const ref = useRef(null);
    const {} = useFocusRing
    const {buttonProps} = useButton(props,ref)
    const {focusProps} = useFocusRing();
    return (
        <Button variant={"outline"} size={"icon"} {...mergeProps(buttonProps,focusProps)} disabled={props.isDisabled}>
            {props.children}
        </Button>
    )
}