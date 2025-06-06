import InfoCard from './InfoCard';
import AdvisoryMember from './AdvisoryMember';

export default function AboutSection() {
return (
<section className="px-6 py-12 space-y-16">
    <InfoCard
    image="/ieee-logo.png"
    title="ABOUT US"
    description="The IEEE North Karnataka Sub-Section (IEEE-NKSS), established in July 2020 (R0011902), aims to connect professionals and promote technological advancements through IEEE membership..."
    buttonText="Read More"
    buttonLink="#"
    />

    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800">ADVISORY COMMITTEE</h2>

    <AdvisoryMember
    name="Prof. S. H. Jangamshetty"
    title="Vice Chancellor"
    location="Haveri University, Haveri - 581110"
    image="/prof-jangamshetty.png"
    profileLink="#"
    />
</section>
);
}
