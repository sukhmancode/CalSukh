import { useRef } from "react";
import { mergeProps, useCalendarCell, useFocusRing } from "react-aria";
import { CalendarState } from "react-stately";
import { CalendarDate, isToday, getLocalTimeZone, isSameMonth } from "@internationalized/date";
import { cn } from "@/lib/utils";

export function CalendarCell({
    state,
    date,
    currentMonth,
    isUnavailable
}: {
    state: CalendarState;
    date: CalendarDate;
    currentMonth: CalendarDate;
    isUnavailable?:boolean
}) {
    const ref = useRef(null);
    const {
        cellProps,
        buttonProps,
        isSelected,
        isDisabled,
        formattedDate,
    } = useCalendarCell({ date }, state, ref);

    const { focusProps, isFocusVisible } = useFocusRing();
    const isDateToday = isToday(date, getLocalTimeZone());
    const isOutsideMonth = !isSameMonth(currentMonth, date); 
    const finallyDisabled = isDisabled || isUnavailable

    return (
        <td {...cellProps} className={`py-0.5 px-0.5 relative ${isFocusVisible ? "z-10" : "z-0"}`}>
            <div
                {...mergeProps(buttonProps, focusProps)}
                ref={ref}
                className={cn("size-10 sm:size-12 outline-none group rounded-md",!finallyDisabled ? "bg-secondary" : "")}
                aria-disabled={finallyDisabled}
            >
                <div
                    className={cn(
                        "size-full rounded-sm flex items-center justify-center text-sm font-semibold",
                        isSelected && !finallyDisabled ? "bg-primary text-white" : "text-primary",
                        finallyDisabled ? "text-muted-foreground cursor-not-allowed" : "",
                        !isSelected && !finallyDisabled ? "hover:bg-primary/10" : "",
                        isOutsideMonth ? "opacity-50" : "" 
                    )}
                >
                    {formattedDate}
                    {isDateToday && (
                        <div
                            className={cn(
                                "absolute bottom-3 transform translate-y-1/2 size-1.5 bg-primary rounded-full",
                                isSelected ? "bg-white" : ""
                            )}
                        />
                    )}
                </div>
            </div>
        </td>
    );
}
