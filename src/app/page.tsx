import { PrismaClient } from '@prisma/client'
import db from '@/db'
import {submitForm} from "@/app/actions"
import {
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import {EntryForm, TextInput} from '@/components'


export default async function Home() {

  const days = await db.main.findMany()
  const todayEntered = days.some((day) => {
    const date = new Date(new Date(day.date)).toISOString().slice(0, 10)

    return date === new Date().toISOString().slice(0, 10)
  })



  return (
      <div className="px-8 bg-gray-50 pt-12 min-h-screen">
        <div className="flex items-center justify-between">
          <div className="w-80">

          </div>
          <div className="mt-0 ml-16 flex-none">
            <button
                type="button"
                className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-6">
            <div className="inline-block min-w-full py-2 align-middle px-6">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 pl-6">
                      Date
                    </th>
                    <th className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 pl-6">
                      Drinks
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Journaled
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Mindfulness
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Sleep Hours
                    </th>
                    <th className="relative py-3.5 pl-3 pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                  {days.map((day) => {
                      const utcString = new Date(day.date).toUTCString()
                    const betterDate = new Date(utcString)
                    const date = betterDate.getUTCDate()
                    const month = betterDate.getUTCMonth() + 1
                    const year = betterDate.getUTCFullYear()


                      return (
                      <tr key={`${day.date}`}>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 pl-6">
                          {`${month}/${date}/${year}`}
                        </td>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900 pl-6">
                          {day.drinks}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {day.journal ? "Yes" : "No"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {day.meditate ? "Yes" : "No"}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {day.sleep}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-4 pr-6 text-right text-sm font-medium">
                          <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900 inline-flex items-center"
                          >
                            Edit
                            <ChevronRightIcon className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                  )}
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {!todayEntered ? (
        <EntryForm onSubmit={submitForm} />
        ) : null}
      </div>
  );
}
