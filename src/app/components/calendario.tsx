'use client';

import FullCalendar from "@fullcalendar/react";
import  dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


interface CalendarioProps {
    titulo : String;
    data : String;
    descricao : String;
}

interface CalendarioEventsProps {
    compromissos: CalendarioProps[];
}

export default function Calendario({ compromissos }: CalendarioEventsProps){
    return(
        <div className="m-8 p-6 bg-gray-300 rounded-lg shadow-md">
            <FullCalendar  
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={compromissos}
            locale="pt-br"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay'
            }}
            buttonText={{today: 'Hoje', month: 'Mês', week: 'Semana', day: 'Dia'}}
            height="auto"
            />

        </div>                                              
    )
}