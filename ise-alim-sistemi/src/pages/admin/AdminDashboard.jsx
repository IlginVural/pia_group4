import React from "react";
import { CalendarDays, UserCheck, Users, ClipboardList } from "lucide-react";

const AdminDashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0a4b78] text-white p-5 space-y-6">
        <div className="text-2xl font-bold">PiA</div>
        <nav className="space-y-4">
          <a href="#" className="block font-semibold">Ana Sayfa</a>
          <a href="#" className="block">İlanlar</a>
          <a href="#" className="block">Adaylar</a>
          <a href="#" className="block">Raporlar</a>
          <a href="#" className="block">Mülakatlar</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Genel Bakış</h1>
          <button className="bg-[#0a4b78] text-white px-4 py-2 rounded-md">+ İlan Ekle</button>
        </header>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-3xl font-bold text-[#6a11cb]">33</div>
            <p className="mt-2 text-sm text-gray-600">Bekleyen Mülakatlar</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-3xl font-bold text-[#6a11cb]">2</div>
            <p className="mt-2 text-sm text-gray-600">Bekleyen Onaylar</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-3xl font-bold text-[#6a11cb]">44</div>
            <p className="mt-2 text-sm text-gray-600">Bekleyen Değerlendirme</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-3xl font-bold text-[#6a11cb]">13</div>
            <p className="mt-2 text-sm text-gray-600">Bekleyen Kabuller</p>
          </div>
        </div>

        {/* Table and Meetings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-4 overflow-auto">
            <h2 className="text-md font-semibold mb-4">Önemli İlanlar</h2>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="pb-2">İlan</th>
                  <th className="pb-2">Pozisyon</th>
                  <th className="pb-2">Başvuru</th>
                  <th className="pb-2">Mülakat</th>
                  <th className="pb-2">Red</th>
                  <th className="pb-2">Değerlendirme</th>
                  <th className="pb-2">Teklif</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: "Senior Data Analyst", pos: 3, apply: 123, int: 40, reject: 33, eval: 7, offer: 2 },
                  { title: "Junior Data Analyst", pos: 7, apply: 567, int: 22, reject: 6, eval: 2, offer: 4 },
                  { title: "Product Designer", pos: 2, apply: 201, int: 32, reject: 18, eval: 14, offer: 0 },
                  { title: "Java Developer", pos: 4, apply: 233, int: 22, reject: 13, eval: 13, offer: 3 },
                  { title: "Product Manager", pos: 3, apply: 141, int: 21, reject: 19, eval: 19, offer: 1 },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="py-2 font-medium">{row.title}</td>
                    <td>{row.pos}</td>
                    <td>{row.apply}</td>
                    <td>{row.int}</td>
                    <td>{row.reject}</td>
                    <td>{row.eval}</td>
                    <td>{row.offer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Meetings */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="text-md font-semibold mb-4">Yakındaki Toplantılar</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              {[
                "09:00 - UX Interview w/ Selin Kaya",
                "10:30 - Tech Interview w/ Ahmet Demir",
                "13:00 - HR Meeting w/ Elif Yılmaz",
                "15:00 - Debrief w/ Hiring Team",
                "16:30 - Product Demo"
              ].map((meeting, idx) => (
                <li key={idx} className="bg-blue-50 p-2 rounded border border-blue-200">
                  {meeting}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
